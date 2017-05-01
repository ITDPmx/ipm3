import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChartDataService } from '../../chart.data.service';
@Component({
	selector: 'chart-seven',
	templateUrl: './chart-seven.component.html',
	styleUrls: ['./chart-seven.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ChartDataService]
})
export class ChartSevenComponent implements OnInit {
	@Input() options: object;
	@Input() sevenChartUpdateYear: string;
	_chart: any;
	_getYearSeries: Observable<any>;
	_getYearData: Observable<any>;
	constructor(private chartService: ChartDataService) {
		this._getYearSeries = this.chartService.getSevenChartData();
	}

	ngOnInit() {
		this.options["title"].text = this.sevenChartUpdateYear;
		this.options["colors"] = ["#9dd477","#98cfff"];
		this.loadChartData(true);
	}

	ngOnChanges() {
		if (this.sevenChartUpdateYear && this._chart) {
			this.loadChartData(false);
		}
	}

	loadChartData(bool: boolean) {
		this._getYearSeries
		.map( event => { return event.years[this.sevenChartUpdateYear] })
		.subscribe(data =>{
			if (data) {
				if (bool) {
					this._chart["xAxis"][0].setCategories(data.categories);
					this._chart.addSeries(data.series[0])
					this._chart.addSeries(data.series[1])
				} 
				else {
					this._chart.setTitle({text:this.sevenChartUpdateYear});
					this._chart.series[0].update({
						data: data.series[0].data
					});
					this._chart.series[1].update({
						data: data.series[1].data
					});
				}
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
