import { Component, Input, OnInit } from '@angular/core';
@Component({
	selector: 'chart-five',
	templateUrl: './chart-five.component.html',
	styleUrls: ['./chart-five.component.css']
})
export class ChartFiveComponent implements OnInit {
	_series: Array<any>;
	_categories: Array<any>;
	_colors: Array<any>;
	@Input() options: object;
	constructor() {
		this._categories = ['Transporte Público', 'Bicicleta, caminata (espacio público)', 'Automóvil, taxi y otros'];
		this._series = [
			{
				 name: 'Viajes al trabajo',
				 data: [45, 24, 31]
			},{
				 name: 'Inversión',
				 data: [6, 13, 80]
			},
			{
				 name: 'Viajes a la escuela',
				 data: [32, 43, 25]
			}
		];
		this._colors = ["#41AD49","#70A4D8","#E96021"];
	}

	ngOnInit() {
		if( this._series  && this._categories && this._colors){
			this.options["series"] = this._series;
			this.options["xAxis"].categories = this._categories;
			this.options["colors"] = this._colors;
		}
	}

}
