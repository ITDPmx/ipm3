import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MapService } from '../map.service'
import 'rxjs/add/operator/find';
export declare let require: any;
import * as L from 'leaflet';

const zm = window["zmData"];

@Component({
  selector: 'ipm-map',
  templateUrl: './ipm-map.component.html',
  styleUrls: ['./ipm-map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MapService]
})

export class IpmMapComponent implements OnInit {
  public map: any;
  _getDataChart: any;
  _getGeoJson: any;
  _zmGeoJson: any;
  private _zm:any;
	@ViewChild('map') _map;
  constructor(public mapService: MapService) {
    this._getDataChart = Observable.create( observer => {
      observer.next(zm.features);
    });

  }

  ngOnInit() {
    this.map = L.map('map').setView([19.47152819193908, -99.05582722634055],9);
    this.mapService.layer.addTo(this.map);
    this.loadLayer();
  }

  loadLayer() {
    this._getDataChart
    .map(zones => zones.find(zone => zone.zm == "Valle de México"))
    .subscribe(this._setDataChart);

    this._getDataChart.subscribe(this._setGeoJson.bind(this));
  }

  _setDataChart(zmChart) {
    console.log(zmChart);
  }

  _setGeoJson(zm:any) {
    this._zmGeoJson = L.geoJSON(zm, {
      style: (fillColor:any) =>{
        return this.styleZM
      },
      onEachFeature: (feature:any, layer:any) => {
        return this.onEachFeatureZm
      }
    });
    this._zmGeoJson.addTo(this.map);

  }

  styleZM(fillColor:any) {
    return {
      fillColor: '#000',
    }
  }

  onEachFeatureZm(feature:any, layer:any) {
    layer.on({
      mouseover: this.highlightFeatureZM,
      mouseout: this.resetHighlightZM,
      click: this.zoomToFeatureZM
    });

    if (feature.zm) {
      layer.bindPopup(feature.zm);
    }
  }

  highlightFeatureZM(e) {
    var layer = e.target;
    layer.setStyle({
      color:'#000',
      dashArray: 2,
      fillColor: '#000',
      fillOpacity: 0.5,
      opacity:0.5,
      weight: 2
    });
    if (!L.Browser.ie && !L.Browser.opera12) {
      layer.bringToFront();
    }
  }

  resetHighlightZM() {
  }

  zoomToFeatureZM() {
  }


}
