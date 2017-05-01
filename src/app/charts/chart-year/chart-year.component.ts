import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'chart-year',
  templateUrl: './chart-year.component.html',
  styleUrls: ['./chart-year.component.css']
})
export class ChartYearComponent implements OnInit {
	@Input() options: object;
	@Input() selectedZm: object;
	_chart: any;

  constructor() { }

  ngOnInit() {
  	this.options["colors"] = ["#41AD49","#70A4D8","#E96021","#F9A01B","#71acd0"];
  }

  ngAfterViewInit() {
    if (this.selectedZm && this._chart) {
  		this.loadChartData();
  	}
  }

  ngOnChanges() {
  	if (this.selectedZm && this._chart) {
  		this.loadChartData();
  	}
  }

	loadChartData() {
		this._chart.series[0].setData([
			this.selectedZm["Total2011"], this.selectedZm["Total2012"], this.selectedZm["Total2013"], this.selectedZm["Total2014"], this.selectedZm["Total2015"]
		]);
	}

	chartInstance(instance) {
		this._chart = instance;
	}

}
