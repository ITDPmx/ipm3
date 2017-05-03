import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChartDataService } from '../../chart.data.service';

@Component({
  selector: 'chart-percentage',
  templateUrl: './chart-percentage.component.html',
  styleUrls: ['./chart-percentage.component.css']
})
export class ChartPercentageComponent implements OnInit {


	@Input() options: object;
	@Input() nineChartUpdateYear: string;
	_chart: any;
	_getYearSeries: Observable<any>;
	_getYearData: Observable<any>;
	constructor(private chartService: ChartDataService) {
		this._getYearSeries = this.chartService.getNineChartData();
	}

	ngOnInit() {
		this.options["title"].text = this.nineChartUpdateYear;
		this.options["colors"] = ["#98cfff","#9dd477"];
		this.loadChartData(true);
	}

	ngOnChanges() {
		if (this.nineChartUpdateYear && this._chart) {
			this.loadChartData(false);
		}
	}

	loadChartData(bool: boolean) {

		this._getYearSeries
		.map( event => { return event.years[this.nineChartUpdateYear] })
		.subscribe(data =>{
			if (bool) {
				this._chart["xAxis"][0].setCategories(data.categories);
				this._chart.addSeries(data.series[0])
				this._chart.addSeries(data.series[1])
			} 
			else {
				this._chart.setTitle({text:this.nineChartUpdateYear});
				this._chart.series[0].setData(data.series[0].data);
				this._chart.series[1].setData(data.series[1].data);
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
