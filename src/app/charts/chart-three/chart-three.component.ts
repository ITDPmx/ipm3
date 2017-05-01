import { Component, Input, OnInit } from '@angular/core';
@Component({
	selector: 'chart-three',
	templateUrl: './chart-three.component.html',
	styleUrls: ['./chart-three.component.css']
})
export class ChartThreeComponent implements OnInit {
	_series: Array<any>;
	_categories: Array<any>;
	_colors: Array<any>;
	@Input() options: object;
	constructor() {
		this._categories = ['2011', '2012', '2013', '2014', '2015'];
		this._series = [
			{
				name: 'Otros',
				data: [27902.79,25026.63,21010.36,20573.00,19149.23]
			}, {
				name: 'Movilidad',
				data: [67848.72,67946.92,39233.34,28009.57,38475.24]
			}
		];
		this._colors = ["#9FA8DA","#80CBC4"];
	}

	ngOnInit() {
		if( this._series  && this._categories && this._colors){
			this.options["series"] = this._series;
			this.options["xAxis"].categories = this._categories;
			this.options["colors"] = this._colors;
		}
	}

}
