import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'chart-split',
  templateUrl: './chart-split.component.html',
  styleUrls: ['./chart-split.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartSplitComponent implements OnInit {
	@Input() options: object;
	@Input() selectedZm: object;
	@Input() updateChartWidth: object;
	
	_chart: any;
  constructor() { }

    ngOnInit() {
    	//this.options["colors"] = ["#41AD49","#70A4D8","#E96021","#F9A01B","#71acd0"];
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
  				this.selectedZm["ef"], this.selectedZm["ee"], this.selectedZm["ea"], this.selectedZm["ed"], this.selectedZm["ec"], this.selectedZm["eg"]
  			]);
  		this._chart.series[1].setData([
  				this.selectedZm["tf"], this.selectedZm["te"], this.selectedZm["ta"], this.selectedZm["td"], this.selectedZm["tc"], this.selectedZm["tg"]
  		]);
  	}

  	chartInstance(instance) {
  		this._chart = instance;
  	}

}
