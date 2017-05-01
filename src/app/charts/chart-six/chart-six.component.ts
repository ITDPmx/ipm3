import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChartDataService } from '../../chart.data.service';
@Component({
	selector: 'chart-six',
	templateUrl: './chart-six.component.html',
	styleUrls: ['./chart-six.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ChartDataService]
})
export class ChartSixComponent implements OnInit {
	@Input() options: object;
	@Input() sixChartUpdateYear: string;
	_chart: any;
	_getYearSeries: Observable<any>;
	_getYearData: Observable<any>;
	constructor(private chartService: ChartDataService) {
		this._getYearSeries = this.chartService.getSixChartData();
	}

	ngOnInit() {
		this.options["title"].text = this.sixChartUpdateYear;
		this.options["colors"] = ["#41AD49","#70A4D8"];
		this.loadChartData(true);
	}

	ngOnChanges() {
		if (this.sixChartUpdateYear && this._chart) {
			this.loadChartData(false);
		}
	}

	loadChartData(bool: boolean) {
		this._getYearSeries
		.map( event => { return event.years[this.sixChartUpdateYear] })
		.subscribe(data =>{
			if (bool) {
				this._chart["xAxis"][0].setCategories(data.categories);
				this._chart.addSeries(data.series[0])
				this._chart.addSeries(data.series[1])
			} 
			else {
				this._chart.setTitle({text:this.sixChartUpdateYear});
				this._chart.series[0].update({
					data: data.series[0].data
				});
				this._chart.series[1].update({
					data: data.series[1].data
				});
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
