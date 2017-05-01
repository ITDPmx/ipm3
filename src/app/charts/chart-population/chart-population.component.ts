import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'chart-population',
  templateUrl: './chart-population.component.html',
  styleUrls: ['./chart-population.component.css']
})
export class ChartPopulationComponent implements OnInit {
	@Input() options: object;
	@Input() selectedZm: object;
	_chart: any;

  constructor() { }

  ngOnInit() {
  	this.options["colors"] = ["#9dd477","#98cfff","#fa8b7d","#fdd625"];
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
			this.selectedZm["Pob90"], this.selectedZm["Pob00"], this.selectedZm["Pob10"], this.selectedZm["Pob15"]
		]);
	}

	chartInstance(instance) {
		this._chart = instance;
	}

}
