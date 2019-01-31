import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
export declare let require: any;
import * as L from 'leaflet';

@Injectable()
export class MapService {
	layer: any;
	constructor() {
		this.layer = L.tileLayer('https://api.mapbox.com/styles/v1/itdpmexico/cjb9pyd2a4g8a2rmv8zp0clpf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaXRkcG1leGljbyIsImEiOiJLQ2l3TGpRIn0.5vOKiHRBTwwiJRmh_FI3jw', {
		  attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
		});
	}
}