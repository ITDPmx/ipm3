import { Component, Input, OnInit } from '@angular/core';
@Component({
	selector: 'chart-one',
	templateUrl: './chart-one.component.html',
	styleUrls: ['./chart-one.component.css']
})
export class ChartOneComponent implements OnInit {
	_series: Array<any>;
	_categories: Array<any>;
	_colors: Array<any>;
	@Input() options: object;
	constructor() {
		this._categories = ['2011', '2012', '2013', '2014', '2015'];
		this._series = [
			{
				name: 'Otros',
				data: [71,73,65,58,68]
			},
			{
				name: 'Movilidad',
				data: [29,27,35,42,32]
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
