import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChartDataService } from '../../chart.data.service';

@Component({
  selector: 'chart-percentage-investment',
  templateUrl: './chart-percentage-investment.component.html',
  styleUrls: ['./chart-percentage-investment.component.css']
})
export class ChartPercentageInvestmentComponent implements OnInit {

	@Input() options: object;
	@Input() tenChartUpdateYear: string;
	_chart: any;
	_getYearSeries: Observable<any>;
	_getYearData: Observable<any>;
	constructor(private chartService: ChartDataService) {
		this._getYearSeries = this.chartService.getTenChartData();
	}

	ngOnInit() {
		this.options["title"].text = this.tenChartUpdateYear;
		this.options["colors"] = ["#9dd477","#98cfff","#fa8b7d","#fdd625","#9FA8DA","#80CBC4"];
		this.loadChartData(true);
	}

	ngOnChanges() {
		if (this.tenChartUpdateYear && this._chart) {
			this.loadChartData(false);
		}
	}

	loadChartData(bool: boolean) {
		this._getYearSeries
		.map( event => { return event.years[this.tenChartUpdateYear] })
		.subscribe(data =>{
			if (bool) {
				this._chart["xAxis"][0].setCategories(data.categories);
				this._chart.addSeries(data.series[0]);
				this._chart.addSeries(data.series[1]);
				this._chart.addSeries(data.series[2]);
				this._chart.addSeries(data.series[3]);
				this._chart.addSeries(data.series[4]);
				this._chart.addSeries(data.series[5]);
			} 
			else {
				this._chart.setTitle({text:this.tenChartUpdateYear});
				this._chart.series[0].setData(data.series[0].data);
				this._chart.series[1].setData(data.series[1].data);
				this._chart.series[2].setData(data.series[2].data);
				this._chart.series[3].setData(data.series[3].data);
				this._chart.series[4].setData(data.series[4].data);
				this._chart.series[5].setData(data.series[5].data);
			}
		});

		this._getYearSeries.subscribe(data => {
			this._chart["xAxis"][0].setCategories(data.categories);
		});
	}

	chartInstance(instance) {
		this._chart = instance;
	}

}
