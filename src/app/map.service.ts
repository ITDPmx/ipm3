import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
export declare let require: any;
import * as L from 'leaflet';

@Injectable()
export class MapService {
	layer: any;
	constructor() {
		this.layer = L.tileLayer('https://{s}.tiles.mapbox.com/v3/itdpmexico.ig2j36lg/{z}/{x}/{y}.png', {
		  attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
		});
	}

}