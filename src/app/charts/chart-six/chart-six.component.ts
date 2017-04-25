import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChartSixDataService } from '../../chart.data.service';
@Component({
	selector: 'chart-six',
	templateUrl: './chart-six.component.html',
	styleUrls: ['./chart-six.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ChartSixDataService]
})
export class ChartSixComponent implements OnInit {
	@Input() options: object;
	@Input() updateYear: string;
	//private yearObserver: Observable<string>;
	
	_chart: any;
	_getYearSeries: Observable<any>;
	_getYearData: Observable<any>;
	constructor(private chartService: ChartSixDataService) {
		this._getYearSeries = this.chartService.getChartData();
		//this._getYearData = this._getYearSeries;
	}

	ngOnInit() {
		this.loadData();

	}

	loadData() {
		this.options["title"].text = this.updateYear;
		this.options["colors"] = ["#41AD49","#70A4D8"];

		this._getYearSeries
		.map( event => { return event.years[this.updateYear] })
		.subscribe(data =>{
			this._chart.addSeries(data.series[0])
			this._chart.addSeries(data.series[1])
		});

		this._getYearSeries.subscribe(data => {
			this._chart["xAxis"][0].setCategories(data.categories);
		});
	}

	ngOnChanges(...args: any[]) {
		if (this.updateYear && this._chart) {
			this._chart.setTitle({text:this.updateYear});
			this._getYearSeries
			.map( event => { return event.years[this.updateYear] })
			.subscribe(data =>{

				if (data.series[0].data) {
					this._chart.series[0].update({
						data: data.series[0].data
					});
					this._chart.series[1].update({
						data: data.series[1].data
					});
					this._chart.redraw();
				}
			});
		}
	}
	saveInstance(chartInstance) {
		this._chart = chartInstance;
	}



}
