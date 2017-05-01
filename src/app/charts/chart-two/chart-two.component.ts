import { Component, Input, OnInit } from '@angular/core';
@Component({
	selector: 'chart-two',
	templateUrl: './chart-two.component.html',
	styleUrls: ['./chart-two.component.css']
})
export class ChartTwoComponent implements OnInit {
	_series: Array<any>;
	_categories: Array<any>;
	_colors: Array<any>;

	@Input() options: object;
	constructor() {
		this._series = [
			{
				name: 'Infraestructura Peatonal',
				data: [4,5,5,3,5]
			},
			{
				name: 'Espacio Público',
				data: [5,12,12,9,7]
			},
			{
				name: 'Infraestructura Ciclista',
				data: [0,0,0,1,1]
			},
			{
				name: 'Transporte Público',
				data: [3,4,4,3,6]
			},
			{
				name: 'Pavimentación',
				data: [30,37,38,35,33]
			},
			{
				name: 'Infraestructura Vial',
				data: [58,41,40,49,47]
			}
		];
		this._categories = ['2011', '2012', '2013', '2014', '2015'];
		this._colors = ["#9dd477","#98cfff","#fa8b7d","#fdd625","#9FA8DA","#80CBC4"];
	}

	ngOnInit() {
		if( this._series  && this._categories && this._colors){
			this.options["series"] = this._series;
			this.options["xAxis"].categories = this._categories;
			this.options["colors"] = this._colors;
		}
	}

}
