import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChartSixDataService {

  constructor(private http: Http) { }

  getChartData() {
  	return this.http
  	.get('./assets/data/chart.json')
  	.map(response => response.json());
  }
}
