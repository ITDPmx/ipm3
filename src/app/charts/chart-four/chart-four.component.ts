import { Component, Input, OnInit } from '@angular/core';
@Component({
	selector: 'chart-four',
	templateUrl: './chart-four.component.html',
	styleUrls: ['./chart-four.component.css']
})
export class ChartFourComponent implements OnInit {
	_series: Array<any>;
	_categories: Array<any>;
	_colors: Array<any>;
	@Input() options: object;
	constructor() {
		this._categories = ['2011', '2012', '2013', '2014', '2015'];
		this._series = [
			{
				name: 'Infraestructura Peatonal',
				data: [1156.06,1330.32,1019.72,660.45,966.39]
			},
			{
				name: 'Espacio Público',
				data: [1464.36,2925.89,2547.71,1852.25,1295.18]
			},
			{
				name: 'Infraestructura Ciclista',
				data: [79.58,99.93,64.35,128.40,274.97]
			},
			{
				name: 'Transporte Público',
				data: [811.94,1068.19,876.19,579.05,1165.52]
			},
			{
				name: 'Pavimentación',
				data: [8328.81,9320.13,8065.37,7281.40,6370.53]
			},
			{
				name: 'Infraestructura Vial',
				data: [16062.02,10282.16,8437.01,10071.45,9076.63]
			}
		];
		this._colors = ["#41AD49","#70A4D8","#E96021","#F9A01B","#71acd0"];
	}

	ngOnInit() {
		if( this._series  && this._categories && this._colors){
			this.options["series"] = this._series;
			this.options["xAxis"].categories = this._categories;
			this.options["colors"] = this._colors;
		}
	}

}
