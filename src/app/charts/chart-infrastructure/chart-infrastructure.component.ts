import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'chart-infrastructure',
  templateUrl: './chart-infrastructure.component.html',
  styleUrls: ['./chart-infrastructure.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartInfrastructureComponent implements OnInit {
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
		//this._chart.setSize(this.updateChartWidth, undefined);
		this._chart.series[0].setData([
				this.selectedZm["InfPeaton2011"],
				this.selectedZm["Ciclopista2011"],
				this.selectedZm["EPublico2011"],
				this.selectedZm["TPublico2011"],
				this.selectedZm["Auto2011"],
				this.selectedZm["Pavimentacion2011"]
			]);
		this._chart.series[1].setData([
				this.selectedZm["InfPeaton2012"],
				this.selectedZm["Ciclopista2012"],
				this.selectedZm["EPublico2012"],
				this.selectedZm["TPublico2012"],
				this.selectedZm["Auto2012"],
				this.selectedZm["Pavimentacion2012"]
		]);
		this._chart.series[2].setData([
				this.selectedZm["InfPeaton2013"],
				this.selectedZm["Ciclopista2013"],
				this.selectedZm["EPublico2013"],
				this.selectedZm["TPublico2013"],
				this.selectedZm["Auto2013"],
				this.selectedZm["Pavimentacion2013"]
		]);
		this._chart.series[3].setData([
				this.selectedZm["InfPeaton2014"],
				this.selectedZm["Ciclopista2014"],
				this.selectedZm["EPublico2014"],
				this.selectedZm["TPublico2014"],
				this.selectedZm["Auto2014"],
				this.selectedZm["Pavimentacion2014"]
		]);
		this._chart.series[4].setData([
				this.selectedZm["InfPeaton2015"],
				this.selectedZm["Ciclopista2015"],
				this.selectedZm["EPublico2015"],
				this.selectedZm["TPublico2015"],
				this.selectedZm["Auto2015"],
				this.selectedZm["Pavimentacion2015"]
		]);
	}

	chartInstance(instance) {
		this._chart = instance;
	}

}
