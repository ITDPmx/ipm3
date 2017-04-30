import { Component, OnInit, ViewChild, Output, HostListener, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MapService } from '../map.service';
import 'rxjs/add/operator/find';
export declare let require: any;
import * as L from 'leaflet';
const Chart = require('highcharts');
import { Zm } from '../zm';

const zm = window["zmData"];

@Component({
  selector: 'ipm-map',
  templateUrl: './ipm-map.component.html',
  styleUrls: ['./ipm-map.component.css'],
  providers: [MapService]
})

export class IpmMapComponent implements OnInit {
  private ChartInfra: object;
  public map: any;
  private _zm:any;
  _getDataChart: any;
  _getGeoJson: any;
  _zmGeoJson: any;
  chartWidth: number;
  _setZm: string;
  selectedZm: any;
	@ViewChild('map') _map;
  @ViewChild('sideBar') _sideBar;

  constructor(public mapService: MapService) {
    this._setZm = "Valle de México";
    this.selectedZm = {
      "ID_ZM": 13,
       "Pob90": 15563795, 
       "Pob00": 18396677, 
       "Pob10": 20116842,
       "Pob15": 20892729,
       "TCMA90_00": 2.93256915497, 
       "TCMA00_10": 2.02173551316, 
       "SuperfKm2": 2289.0658668599999, 
       "DMU2_HabHa": 92.016307052599998, 
       "ZM": "Valle de México",
       "lat": 19.489800471500001, 
       "Long_X": -99.0896608133,
       "circle":50292,
      "Auto2011": 62.0,
      "Auto2012": 19.5,
      "Auto2013": 24.7,
      "Auto2014": 26.8,
      "Auto2015": 15.5,
      "Pavimentacion2011": 15.7,
      "Pavimentacion2012": 31.0,
      "Pavimentacion2013": 20.1,
      "Pavimentacion2014": 32.2,
      "Pavimentacion2015": 73.9,
      "TPublico2011": 18.5,
      "TPublico2012": 31.7,
      "TPublico2013": 27.1,
      "TPublico2014": 8.7,
      "TPublico2015": 0.0,
      "Ciclopista2011": 0.0,
      "Ciclopista2012": 0.9,
      "Ciclopista2013": 0.1,
      "Ciclopista2014": 0.0,
      "Ciclopista2015": 0.0,
      "EPublico2011": 2.2,
      "EPublico2012": 13.7,
      "EPublico2013": 20.6,
      "EPublico2014": 20.0,
      "EPublico2015": 6.5,
      "InfPeaton2011": 1.6,
      "InfPeaton2012": 3.1,
      "InfPeaton2013": 7.4,
      "InfPeaton2014": 12.4,
      "InfPeaton2015": 4.1,
      "Total2011": 12140805957.0, 
      "Total2012": 7135381811.0, 
      "Total2013": 6103408223.0,
      "Total2014": 4928087156,
      "Total2015": 1925745043.1,
      "ea": 39,
      "eb": 0,
      "ec": 11,
      "ed": 2,
      "ee": 1,
      "ef": 46,
      "eg": 0,
      "ta": 59,
      "tb": 0,
      "tc": 20,
      "td": 2,
      "te": 3,
      "tf": 16,
      "tg": 1
    };
    this._zm = [
      {id:1, zm: 'Acapulco',lat:16.97932681281335, lon:-99.89283719518407, zoom: 10},
      {id:2, zm: 'Acayucan', lat:18.0200011785468, lon:-94.99860771627891, zoom:11},
      {id:3, zm: 'Aguascalientes', lat:21.951641924508095, lon:-102.26812238895688, zoom: 11},
      {id:4, zm: 'Cancún', lat:21.044318716416065, lon:-86.96787495733386, zoom: 10},
      {id:5, zm: 'Celaya', lat:20.579275941960326, lon:-100.9084036690012, zoom: 10},
      {id:6, zm: 'Chihuahua', lat:28.710724370515393, lon:-106.02429686090744, zoom: 11},
      {id:7, zm: 'Coatzacoalcos', lat:18.090547969646057, lon:-94.452214041385, zooom: 11},
      {id:8, zm: 'Colima-Villa de Álvarez', lat:19.27955887185261, lon:-103.75429212451364, zoom: 10},
      {id:9, zm: 'Córdoba', lat:18.89094508219219, lon:-96.90625933924926, zoom: 11},
      {id:10, zm: 'Cuautla', lat:18.79196803482086, lon:-98.97004014557164, zoom: 11},
      {id:11, zm: 'Cuernavaca', lat: 18.8666693074184, lon: -99.19942700907569, zoom: 11},
      {id:12, zm: 'Guadalajara', lat:20.58106869478855, lon:-103.34232506215895, zoom: 10},
      {id:13, zm: 'Guaymas', lat:27.802769301320822, lon:-110.61453773438713, zoom: 10},
      {id:14, zm: 'Juárez', lat:31.65391111088903, lon:-106.43276798806103, zoom:11},
      {id:15, zm: 'La Laguna', lat:25.55031175570727, lon:-103.40569492596123, zoom: 10},
      {id:16, zm: 'La Piedad-Pénjamo', lat:20.37427189653517, lon:-101.87437344939941, zoom: 10},
      {id:17, zm: 'León', lat:21.054550035635852, lon:-101.56392841201249, zoom: 10},
      {id:18, zm: 'Matamoros', lat:25.8718080375227, lon:-97.62272321029494, zoom: 10},
      {id:19, zm: 'Mérida', lat:20.96385935028844, lon:-89.63341661628708, zoom: 11},
      {id:20, zm: 'Mexicali', lat:31.850963061528436, lon:-115.16176729714999, zoom: 8},
      {id:21, zm: 'Minatitlán', lat:18.015201490876382, lon:-94.59288291206241, zoom: 11},
      {id:22, zm: 'Monclova-Frontera', lat:34.016241889667015, lon:-108.402099609375, zoom: 6},
      {id:23, zm: 'Monterrey', lat:25.664080013887403, lon:-100.28111214588702, zoom: 9},
      {id:24, zm: 'Morelia', lat: 19.755023708793196, lon: -101.2173451346164},
      {id:25, zm: 'Moroleón-Uriangato', lat:20.135224338405422, lon:-101.18730891208756, zoom:13},
      {id:26, zm: 'Nuevo Laredo', lat:17.093541801797898, lon:-99.1021728515625, zoom: 7},
      {id:27, zm: 'Oaxaca', lat:17.05963724617555, lon:-96.72366687222352, zoom: 11},
      {id:28, zm: 'Ocotlán', lat:20.34173255262603, lon:-102.88922490312405, zoom: 11},
      {id:29, zm: 'Orizaba', lat:18.866055007115914, lon:-97.13953146733664, zoom: 11},
      {id:30, zm: 'Pachuca', lat: 20.00386406405472, lon: -98.76750537160022, zoom: 11},
      {id:31, zm: 'Piedras Negras', lat:28.573688099860977, lon:-100.64236934282641, zoom:11},
      {id:32, zm: 'Poza Rica', lat:20.490936768611313, lon:-97.39719477966196, zoom: 10},
      {id:33, zm: 'Puebla-Tlaxcala',lat :19.138570989148764,lon:-98.2246766388583},
      {id:34, zm: 'Puerto Vallarta', lat:20.69832620111513, lon:-105.1489176295303, zoom: 11},
      {id:35, zm: 'Querétaro', lat: 20.619737786410546, lon: -100.37221508258263, zoom: 10},
      {id:36, zm: 'Reynosa-Río Bravo', lat:26.03544144838559, lon:-98.17964382087804, zoom: 10},
      {id:37, zm: 'Ríoverde-Ciudad Fernández', lat:21.930313884219455, lon:-100.00579079180935, zoom:12},
      {id:38, zm: 'Saltillo', lat:25.45679847418931, lon:-100.93974700604026, zoom: 11},
      {id:39, zm: 'San Francisco del Rincón', lat:21.02864192593463, lon:-101.85886773582703, zoom:13},
      {id:40, zm: 'San Luis Potosí-Soledad de Graciano Sánchez', lat:22.1255908634478, lon:-100.96914700886161, zoom: 11},
      {id:41, zm: 'Tampico', lat:22.28985630343277, lon:-98.13644955995645, zoom: 9},
      {id:42, zm: 'Tecomán', lat:18.9178997571369, lon:-103.84861801889126, zoom: 11},
      {id:43, zm: 'Tehuacán', lat: 18.490355124976816, lon :-97.46354815074523, zoom: 11},
      {id:44, zm: 'Tehuantepec',lat:16.221338566467967, lon:-95.27598046826591, zoom: 11},
      {id:45, zm: 'Tepic', lat:15.744675578471627, lon:-101.5081787109375, zoom: 7},
      {id:46, zm: 'Teziutlán', lat:19.835332040544277, lon: -97.37720144847, zoom: 12},
      {id:47, zm: 'Tianguistenco', lat:19.177972165127695, lon:-99.46151362807115, zoom: 12},
      {id:48, zm: 'Tijuana', lat:32.39615675712228, lon:-116.70015092884576, zoom: 9},
      {id:49, zm: 'Tlaxcala-Apizaco', lat:19.368936969897003, lon:-98.16447237074715, zoom: 11},
      {id:50, zm: 'Toluca', lat:19.329098767241568, lon:-99.61592752756711, zoom: 10},
      {id:51, zm: 'Tula', lat:20.05138314977256, lon:-99.27321946242459, zoom: 11},
      {id:52, zm: 'Tulancingo', lat:20.08477195231313, lon:-98.329721882111, zoom: 11},
      {id:53, zm: 'Tuxtla Gutiérrez', lat:16.750852313801374, lon:-93.13106675575897, zoom: 11},
      {id:54, zm: 'Valle de México', lat :19.47152819193908, lon: -99.05582722634055, zoom: 9},
      {id:55, zm: 'Veracruz', lat:18.998364060083677, lon:-96.01565606619339, zoom: 10},
      {id:56, zm: 'Villahermosa', lat:18.010735943156714, lon:-92.91260506229776, zoom: 11},
      {id:57, zm: 'Xalapa', lat:19.48129659957329, lon:-96.77715646837171, zoom: 10},
      {id:58, zm: 'Zacatecas-Guadalupe', lat:22.759685467702713, lon:-102.51633628459278, zoom: 11},
      {id:59, zm: 'Zamora-Jacona', lat:20.012287310294393, lon:-102.28901526912398, zoom: 12},
    ];
    this.ChartInfra = {
      chart:{
        type: 'bar',
        height: 500
      },
      title: {
          text: 'Inversión por tipo de infraestructura'
      },
      xAxis: {
          categories: [ 'Infraestructura Peatonal', 'Infraestructura Ciclista', 'Espacio Público', 'Transporte Público', 'Infraestructura Vehicular', 'Pavimentación'],
          title: {
              text: ''
          },
          labels: {
            useHTML: true,
            formatter: function () {
                return {
                  'Infraestructura Peatonal': '<i class="ipm-pedestrian"></i>',
                  'Infraestructura Ciclista': '<i class="ipm-bicycle"></i>',
                  'Espacio Público': '<i class="ipm-public"></i>',
                  'Transporte Público': '<i class="ipm-transport"></i>',
                  'Infraestructura Vehicular': '<i class="ipm-car"></i>',
                  'Pavimentación': '<i class="ipm-paving"></i>'
              }[this.value]; 
            }
          }
      },
      yAxis: {
          min: 0,
          max: 100,
          title: {
              text: ''
          },
          labels: {
            formatter: function(){
              return parseInt(this.value) + '%';
            }
          }
      },
      legend:{
        itemDistance: 15,
        itemStyle: {
          "fontSize": "14px"
        }
      },
      plotOptions: {
          bar: {
              dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
              }
          }
      },
      tooltip: {
        formatter: function() {
          return '<span style="font-weight: bold;">'+this.key+'<br/><b>'+ this.series.name +'</span></b>: '+this.point.y+'%';
        }
      },
      navigation: {
        buttonOptions: {
          align:"right",
          height: 40,
          width: 48,
          symbolSize: 24,
          symbolX: 23,
          symbolY: 21,
          symbolStrokeWidth: 2,
          x: 10,
          y: -10
        }
      },
      colors: ["#41AD49","#70A4D8","#E96021","#F9A01B","#71acd0"],
      series: [
        {
          name: '2011',
          data: []
        },
        {
          name: '2012',
          data: []
        },
        {
          name: '2013',
          data: []
        },
        {
          name: '2014',
          data: []
        },
        {
          name: '2015',
          data: []
        }
      ]
    }
    this._getDataChart = Observable.create( observer => {
      observer.next(zm.features);
    });
  }

  @HostListener('window:resize') onResize(e){
    this.updateChartWidth(this._sideBar.nativeElement.clientWidth / 2);
  };

  ngOnInit() {
    this.map = L.map('map').setView([19.47152819193908, -99.05582722634055],9);
    this.mapService.layer.addTo(this.map);
    this.ChartInfra["chart"]["width"] = this._sideBar.nativeElement.clientWidth / 2;
    this.loadLayer();
  }


  loadLayer() {
    this._getDataChart
    .map(zones => zones.find(zone => zone.zm === this._setZm))
    .subscribe(this._setDataChart);
    this._getDataChart.subscribe(this._setGeoJson.bind(this));
  }

  updateChartWidth(width: number) {
    this.chartWidth = width;
  }

  _setDataChart(zmChart) {
    this.selectedZm = zmChart;
  }

  _setGeoJson(zm:any) {
    this._zmGeoJson = L.geoJSON(zm,{style:this.styleZM, onEachFeature: this.onEachFeatureZm});
    this._zmGeoJson.addTo(this.map);
    this._zmGeoJson.on({
      "mouseover": this.highlightFeatureZM,
      "mouseout": this.resetHighlightZM.bind(this),
      "click": this.zoomToFeatureZM.bind(this)
    });

  }

  styleZM() {
    return {
      fillColor: '#000',
    }
  }

  onEachFeatureZm(feature, layer) {
    layer.bindPopup(feature.zm);
  }

  highlightFeatureZM(e) {
    var layer = e.layer;
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

  resetHighlightZM(e) {
    this._zmGeoJson.resetStyle(e.layer);
  }

  zoomToFeatureZM(e) {
    this.map.fitBounds(e.layer.getBounds());
    this.selectedZm = e.layer.feature.properties.informacion;
  }

}
