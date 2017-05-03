import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChartDataService {

	constructor(private http: Http) { }

	getSixChartData() {
		return this.http
		.get('./assets/data/chart-six.json')
		.map(response => response.json());
	}
	getSevenChartData() {
		return this.http
		.get('./assets/data/chart-seven.json')
		.map(response => response.json());
	}
	getEightChartData() {
		return this.http
		.get('./assets/data/chart-eight.json')
		.map(response => response.json());
	}
	getNineChartData() {
		return this.http
		.get('./assets/data/chart-nine.json')
		.map(response => response.json());
	}
	getTenChartData() {
		return this.http
		.get('./assets/data/chart-ten.json')
		.map(response => response.json());
	}
	getElevenChartData() {
		return this.http
		.get('./assets/data/chart-eleven.json')
		.map(response => response.json());
	}
}
