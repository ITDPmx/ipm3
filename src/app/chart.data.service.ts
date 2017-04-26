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
}
