import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChartDataService } from '../../chart.data.service';

@Component({
  selector: 'chart-investment',
  templateUrl: './chart-investment.component.html',
  styleUrls: ['./chart-investment.component.css']
})
export class ChartInvestmentComponent implements OnInit {

	@Input() options: object;
	@Input() elevenChartUpdateYear: string;
	_chart: any;
	_getYearSeries: Observable<any>;
	_getYearData: Observable<any>;
	constructor(private chartService: ChartDataService) {
		this._getYearSeries = this.chartService.getElevenChartData();
	}

	ngOnInit() {
		this.options["title"].text = this.elevenChartUpdateYear;
		this.options["colors"] = ["#9dd477","#98cfff","#fa8b7d","#fdd625","#9FA8DA","#80CBC4"];
		this.loadChartData(true);
	}

	ngOnChanges() {
		if (this.elevenChartUpdateYear && this._chart) {
			this.loadChartData(false);
		}
	}

	loadChartData(bool: boolean) {

		this._getYearSeries
		.map( event => { return event.years[this.elevenChartUpdateYear] })
		.subscribe(data =>{
			if (bool) {
				
				//this._chart["yAxis"][0].max = parseInt(13);
				
				this._chart["xAxis"][0].setCategories();
				this._chart.addSeries(data.series[0]);
				this._chart.addSeries(data.series[1]);
				this._chart.addSeries(data.series[2]);
				this._chart.addSeries(data.series[3]);
				this._chart.addSeries(data.series[4]);
				this._chart.addSeries(data.series[5]);
			} 
			else {
				this._chart.setTitle({text:this.elevenChartUpdateYear});
				this._chart.series[0].setData(data.series[0].data);
				this._chart.series[1].setData(data.series[1].data);
				this._chart.series[2].setData(data.series[2].data);
				this._chart.series[3].setData(data.series[3].data);
				this._chart.series[4].setData(data.series[4].data);
				this._chart.series[5].setData(data.series[5].data);
			}
			// let maxA:any = maxValue.map(a => Math.max.apply(null, a));
			// console.log(maxA);
			// // maxA = maxA[0]+maxA[1]+maxA[2]+maxA[3]+maxA[4]+maxA[5];
			// // console.log(maxA);
			// maxA = Number(maxA.toString().substring(0,2) * 100 + 2000);
			// console.log(maxA);
			// // maxA = Number(Math.max.apply(null,maxA).toString().substring(0,2)) * 1000 + 2000;
			// this._chart["yAxis"][0].setExtremes(0, maxA);
		});

		this._getYearSeries.subscribe(data => {
			this._chart["xAxis"][0].setCategories(data.categories);
		});

	}

	chartInstance(instance) {
		this._chart = instance;
	}

}
