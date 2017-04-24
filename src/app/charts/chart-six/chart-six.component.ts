import { Component, Input, OnInit } from '@angular/core';
@Component({
	selector: 'chart-six',
	templateUrl: './chart-six.component.html',
	styleUrls: ['./chart-six.component.css']
})
export class ChartSixComponent implements OnInit {
	@Input() options: object;
	@Input() updateYear: string;
	
	_zm: Array<any>;
	_title: string;
	_series: Array<any>;
	_categories: Array<any>;
	_colors: Array<any>;
	_chartYear: string;
	constructor() {
		this._zm = [
			"Acapulco",
			"Acayucan",
			"Aguascalientes",
			"Cancún",
			"Celaya",
			"Chihuahua",
			"Coatzacoalcos",
			"Colima-Villa de Álvarez",
			"Córdoba",
			"Cuautla",
			"Cuernavaca",
			"Guadalajara",
			"Guaymas",
			"Juárez",
			"La Laguna",
			"La Piedad-Pénjamo",
			"León",
			"Matamoros",
			"Mérida",
			"Mexicali",
			"Minatitlán",
			"Monclova-Frontera",
			"Monterrey",
			"Morelia",
			"Moroleón-Uriangato",
			"Nuevo Laredo",
			"Oaxaca",
			"Ocotlán",
			"Orizaba",
			"Pachuca",
			"Piedras Negras",
			"Poza Rica",
			"Puebla-Tlaxcala",
			"Puerto Vallarta",
			"Querétaro",
			"Reynosa-Río Bravo",
			"Rioverde-Ciudad Fernández",
			"Saltillo",
			"San Francisco del Rincón",
			"San Luis Potosí-Soledad de Graciano Sánchez",
			"Tampico",
			"Tecomán",
			"Tehuacán",
			"Tehuantepec",
			"Tepic",
			"Teziutlán",
			"Tianguistenco",
			"Tijuana",
			"Tlaxcala-Apizaco",
			"Toluca",
			"Tula",
			"Tulancingo",
			"Tuxtla Gutiérrez",
			"Valle de México",
			"Veracruz",
			"Villahermosa",
			"Xalapa",
			"Zacatecas-Guadalupe",
			"Zamora-Jacona"
		];
		this._title = "2011";
		this._series = [
			{
				name: 'Otros',
				data: [61,100,87,66,78,86,70,83,47,83,87,70,41,80,53,66,61,67,91,50,51,65,87,72,73,64,86,4,80,69,66,72,35,8,67,70,83,48,76,83,57,85,61,74,98,78,85,91,49,80,75,66,67,68,74,84,61,85,74]
			},
			{
				name: 'Movilidad',
				data: [39,0,13,34,22,14,30,17,53,17,13,30,59,20,47,34,39,33,9,50,49,35,13,28,27,36,14,96,20,31,34,28,65,92,33,30,17,52,24,17,43,15,39,26,2,22,15,9,51,20,25,34,33,32,26,16,39,15,26]
			}
		];
		this._categories = this._zm;
		this._colors = ["#41AD49","#70A4D8"];
	}

	ngOnInit() {
		if( this._title && this._zm && this._series  && this._categories && this._colors){
			this.options["title"].text = this._title;
			this.options["series"] = this._series;
			this.options["xAxis"].categories = this._categories;
			this.options["colors"] = this._colors;
		}
	}

	ngOnChanges(...args: any[]) {
		this._title = this.updateYear;
		this.options["title"].text = this._title;
		
	}

}
