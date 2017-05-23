import { Component, OnInit, Output} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/filter';
import {NgsRevealModule} from 'ng-scrollreveal';
export declare let require: any;
const Chart = require('highcharts');
@Component({
	selector: 'ipm-results',
	templateUrl: './ipm-results.component.html',
	styleUrls: ['./ipm-results.component.css']
})

export class IpmResultsComponent implements OnInit {
	public ChartOne: object;
	public ChartTwo: object;
	public ChartThree: object;
	public ChartFour: object;
	public ChartFive: object;
	public ChartSix: object;
	public ChartSeven: object;
	public ChartEight: object;
	public ChartNine: object;
	public ChartTen: object;
	public ChartEleven: object;
	public sixYearActive: string;
	public sevenYearActive: string;
	public eightYearActive: string;
	public nineYearActive: string;
	public tenYearActive: string;
	public elevenYearActive: string;
	_getAbbrev: any;

	constructor() {

		this.sixYearActive = "2011";
		this.sevenYearActive = "2011";
		this.eightYearActive = "2011";
		this.nineYearActive = "2011";
		this.tenYearActive = "2011";
		this.elevenYearActive = "2011";

		this.ChartOne = {
			chart: {
				type: 'column',
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 550,
				plotAreaHeight: 550
			},
			title: {
				text: ''
			},
			xAxis: {
				categories: [],
				title: {
					enabled: true,
					text: 'Año'
				}
			},
			yAxis: {
				min: 10,
				title: {
					text: 'Porcentajes'
				},
				stackLabels: {
					enabled: true,
					style: {
						fontWeight: 'bold'
					}
				},
				labels: {
					formatter: function(){
						return parseInt(this.value) + '%';
					}
				}
			},
			tooltip: {
				backgroundColor: "#37474F",
				borderWidth: 0,
				style: {
				  color: "white",
				  fontSize: "14px",
				},
				pointFormat: '<span style="color:{series.color};font-weight:bold;">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
				shared: false
			},
			plotOptions: {
				column: {
					stacking: 'percent',
					dataLabels: {
						borderColor: undefined,
						enabled: true,
						color: '#37474F',
						formatter:function() {
							return parseInt(this.percentage) + '%';
						},
						style: {
							fontSize: "14px",
							shadow: false,
							textOutline: "",
							fontWeight: 'bold'
						}
					}
				}
			},
			legend: {
				itemDistance: 40,
				itemStyle: {
					"fontSize": "16px"
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
					x: 20,
					y:-40
				}
			},
			colors: [],
			series: []
		};

		this.ChartTwo = {
			chart: {
				type: 'column',
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 550,
				plotAreaHeight: 550
			},
			title: {
				text: ''
			},
			xAxis: {
				categories: [],
				title: {
					enabled: true,
					text: 'Año'
				}
			},
			yAxis: {
				min: 0,
				title: {
						text: 'Porcentajes'
				},
				stackLabels: {
					enabled: true,
					style: {
						fontWeight: 'bold'
					}
				},
				labels: {
					formatter: function(){
						return parseInt(this.value) + '%';
					}
				}
			},
			tooltip: {
				backgroundColor: "#37474F",
				borderWidth: 0,
				style: {
				  color: "white",
				  fontSize: "14px",
				},
				pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
				shared: true
			},
			plotOptions: {
				column: {
					stacking: 'percent',
					dataLabels: {
						enabled: true,
						color: '#37474F',
						formatter:function() {
							return parseInt(this.percentage) + '%';
						},
						style: {
							fontSize: "14px",
							shadow: false,
							textOutline: "",
							fontWeight: 'bold'
						}
					}
				}
			},
			legend: {
				itemDistance: 40,
				itemStyle: {
					"fontSize": "16px"
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
					x: 20,
					y:-40
				}
			},
			colors: [],
			series: []
		};

		this.ChartThree = {
			chart: {
				type: 'area',
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 550,
				plotAreaHeight: 550
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: [],
				tickmarkPlacement: 'on',
				title: {
					enabled: true,
					text: 'Año'
				}
			},
			yAxis: {
				min: 0,
				max: 100000,
				title: {
					text: 'Millones'
				},
				labels: {
					formatter: function () {
						return "$" + parseInt(this.value) / 1000 + "M";
					}
				}
			},
			tooltip: {
				backgroundColor: "#37474F",
				borderWidth: 0,
				style: {
				  color: "white",
				  fontSize: "13px",
				},
				split: true,
				valueSuffix: ' millones',
				valueDecimals: 2,
				valuePrefix: '$',
				pointFormat: '<span style="color:{series.color};font-weight:bold;">{series.name}</span>: <br><b>{point.y}</b><br/>',
			},
			plotOptions: {
				area: {
					stacking: 'normal',
					lineColor: '#666666',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#666666'
					}
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
					x: 20,
					y:-40
				}
			},
			legend: {
				itemDistance: 40,
				itemStyle: {
					"fontSize": "16px"
				}
			},
			colors: [],
			series: []
		};

		this.ChartFour = {
			chart: {
				type: 'area',
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 550,
				plotAreaHeight: 550
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			xAxis: {
				categories: [],
				tickmarkPlacement: 'on',
				title: {
					enabled: true,
					text: 'Año'
				}
			},
			yAxis: {
				title: {
					text: 'Millones'
				},
				labels: {
					formatter: function () {
						return "$" + this.value/1000 + "M";
					}
				}
			},
			tooltip: {
				backgroundColor: "#37474F",
				borderWidth: 0,
				style: {
				  color: "white",
				  fontSize: "13px"
				},
				split: true,
				valueSuffix: ' millones',
				valuePrefix: '$',
				pointFormat: '<span style="color:{series.color};font-weight:bold;">{series.name}</span>: <br><b>{point.y}</b><br/>',
			},
			plotOptions: {
				area: {
					stacking: 'normal',
					lineColor: '#666666',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#666666'
					},
					format: '${point.y:.1f}%'
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
					x: 20,
					y:-40
				}
			},
			legend: {
				itemDistance: 40,
				itemStyle: {
					"fontSize": "16px"
				}
			},
			colors: [],
			series: []
		};

		this.ChartFive = {
			chart: {
				type: 'column',
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 500,
				plotAreaHeight: 500
			},
			title: {
				text: ''
			},
			xAxis: {
				categories: [],
				title: {
					text: null
				},
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Porcentajes'
				},
				stackLabels: {
					enabled: true,
					style: {
						fontWeight: 'bold'
					}
				},
				labels: {
					formatter: function(){
						return parseInt(this.value) + '%';
					}
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
					x: 20,
					y:-40
				}
			},
			legend: {
				itemDistance: 40,
				itemStyle: {
					"fontSize": "16px"
				}
			},
			tooltip: {
				backgroundColor: "#37474F",
				borderWidth: 0,
				style: {
				  color: "white",
				  fontSize: "13px",
				},
				pointFormat: '<span style="color:{series.color};font-weight:bold;">{series.name}</span>: <b>{point.y}</b>{point.percentage}%</b><br/>',
				shared: true
			},
			plotOptions: {
				series: {
					dataLabels: {
						enabled: true,
						color: 'black',
						formatter:function() {
							return parseInt(this.y) + '%';
						}
					}
				}
			},
			colors: [],
			series: []
		};

		this.ChartSix = {
			chart: {
				type: 'bar',
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 1200
			},
			title: {
				text: ''
			},
			tooltip: {
				backgroundColor: "#37474F",
				borderWidth: 0,
				style: {
				  color: "white",
				  fontSize: "13px",
				},
				pointFormat: '<span style="color:{series.color};font-weight:bold;">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
				shared: true
			},
			xAxis: {
				categories: [],
				title: {
					text: 'Zonas Metropolitanas'
				},
				crosshair: {
					color:"rgba(57, 57, 58, 0.25)",
					zIndex: 10
				}
			},
			yAxis: {
				min: 0,
				max:100,
				title: {
					text: 'Porcentaje'
				},
				labels: {
					formatter: function(){
						return parseInt(this.value) + '%';
					}
				}
			},
			legend: {
				itemDistance: 40,
				itemStyle: {
					"fontSize": "16px"
				},
				reversed: true
			},
			plotOptions: {
				series: {
					stacking: 'normal',
					shadow: false,
					dataLabels: {
						enabled: true,
						borderWidth: 0,
						style: {
						  color: "#000",
						  fontSize: "12px",
						  shadow: false,
						  textOutline: "",
						  fontWeight: '400'
						},
						formatter:function() {
							return parseInt(this.percentage) + '%';
						}
					},
					groupPadding: 0,
					crisp: true
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
	        x: 20,
	        y:-40
 		    }
	 		},
			colors: [],
			series: []
		}

		this.ChartSeven = {
			chart: {
				type: 'bar',
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 1200
			},
			title: {
				text: ''
			},
			tooltip: {
				backgroundColor: "#37474F",
				borderWidth: 0,
				style: {
				  color: "white",
				  fontSize: "13px",
				},
				pointFormat: '<span style="color:{series.color};font-weight:bold;">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
				shared: true
			},
			xAxis: {
				categories: [],
				title: {
					text: 'Zonas Metropolitanas'
				},
				crosshair: {
					color:"rgba(57, 57, 58, 0.25)",
					zIndex: 10
				}
			},
			yAxis: {
				min: 0,
				max:100,
				title: {
					text: 'Porcentaje'
				},
				labels: {
					formatter: function(){
						return parseInt(this.value) + '%';
					}
				}
			},
			legend: {
				itemDistance: 40,
				itemStyle: {
					"fontSize": "16px"
				},
				reversed: true
			},
			plotOptions: {
				series: {
					stacking: 'normal',
					dataLabels: {
						enabled: true,
						borderWidth: 0,
						style: {
						  color: "#000",
						  fontSize: "12px",
						  shadow: false,
						  textOutline: "",
						  fontWeight: '400'
						},
						formatter:function() {
							return parseInt(this.percentage) + '%';
						}
					},
					groupPadding: 0,
					crisp: true
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
	        x: 20,
	        y:-40
 		    }
	 		},
			colors: [],
			series: []
		}

		this.ChartEight = {

			chart: {
				type: 'column',
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 500,
				plotAreaHeight: 500
			},
			title: {
				text: ''
			},
			xAxis: {
				categories: [],
				title: {
					text: null
				},
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Millones de pesos a precios del 2012'
				},
				categories: [],
				stackLabels: {
					enabled: false,
					style: {
						fontWeight: 'bold'
					}
				},
				labels: {
					formatter: function(){
						return "$" + (parseInt(this.value) / 1000) + "M";
					}
				}
			},
			tooltip: {
				backgroundColor: "#37474F",
				borderWidth: 0,
				style: {
				  color: "white",
				  fontSize: "13px",
				},
				split: false,
				shared: true,
				valueSuffix: ' millones',
				valueDecimals: 2,
				valuePrefix: '$',
				pointFormat: '<span style="color:{series.color};font-weight:bold;">{series.name}</span>: <br><b>{point.y}</b><br/>',
			},
			plotOptions: {
				series: {
					dataLabels: {
						enabled: false
					}
				}
			},
			legend: {
				itemDistance: 40,
				itemStyle: {
					"fontSize": "16px"
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
					x: 20,
					y:-40
				}
			},
			colors: [],
			series: []
		};

		this.ChartNine = {
			chart: {
				type: 'column',
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 550,
				plotAreaHeight: 550
			},
			title: {
				text: ''
			},
			xAxis: {
				title: {
					enabled: true,
					text: 'Año'
				},
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
						text: 'Porcentajes'
				},
				stackLabels: {
					enabled: true,
					style: {
						fontWeight: 'bold'
					}
				},
				labels: {
					formatter: function(){
						return parseInt(this.value) + '%';
					}
				}
			},
			tooltip: {
				backgroundColor: "#37474F",
				borderWidth: 0,
				style: {
				  color: "white",
				  fontSize: "14px",
				},
				pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
				shared: true
			},
			plotOptions: {
				column: {
					stacking: 'percent',
					dataLabels: {
						enabled: true,
						color: '#37474F',
						formatter:function() {
							return parseInt(this.percentage) + '%';
						},
						style: {
							fontSize: "14px",
							shadow: false,
							textOutline: "",
							fontWeight: 'bold'
						}
					}
				}
			},
			legend: {
				itemDistance: 40,
				itemStyle: {
					"fontSize": "16px"
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
					x: 20,
					y:-40
				}
			},
			colors: [],
			series: []
		};

		this.ChartTen = {
			chart: {
				type: 'column',
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 650,
				plotAreaHeight: 650
			},
			title: {
				text: ''
			},
			xAxis: {
				title: {
					enabled: true,
					text: 'Año'
				},
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
						text: 'Porcentajes'
				},
				stackLabels: {
					enabled: true,
					style: {
						fontWeight: 'bold'
					}
				},
				labels: {
					formatter: function(){
						return parseInt(this.value) + '%';
					}
				}
			},
			tooltip: {
				backgroundColor: "#37474F",
				borderWidth: 0,
				style: {
				  color: "white",
				  fontSize: "14px",
				},
				pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
				shared: true
			},
			plotOptions: {
				column: {
					stacking: 'percent',
					dataLabels: {
						enabled: true,
						color: '#37474F',
						formatter:function() {
							return parseInt(this.percentage) + '%';
						},
						style: {
							fontSize: "14px",
							shadow: false,
							textOutline: "",
							fontWeight: 'bold'
						}
					}
				}
			},
			legend: {
				itemDistance: 40,
				itemStyle: {
					"fontSize": "16px"
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
					x: 20,
					y:-40
				}
			},
			colors: [],
			series: []
		};

		this.ChartEleven = {
			chart: {
				type: 'column',
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 650,
				plotAreaHeight: 650
			},
			title: {
				text: ''
			},
			xAxis: {
				title: {
					enabled: true,
					text: 'Año'
				},
				crosshair: true
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Millones de pesos a precios del 2012'
				},
				categories: [],
				stackLabels: {
					enabled: false,
					style: {
						fontWeight: 'bold'
					}
				},
				labels: {
					formatter: function(){
						return "$" + (parseInt(this.value) / 1000) + "M";
					}
				}
			},
			tooltip: {
				backgroundColor: "#37474F",
				borderWidth: 0,
				style: {
				  color: "white",
				  fontSize: "13px",
				},
				split: false,
				shared: true,
				valueSuffix: ' millones',
				valueDecimals: 2,
				valuePrefix: '$',
    		headerFormat: '<span style="font-size: 14px;font-weight: 700;">{point.x}</span><br/>',
				pointFormat: '<span style="color:{series.color};font-weight:bold;">{series.name}</span>: <br><b>{point.y}</b><br/>',
			},
			plotOptions: {
				series: {
					stacking: 'column',
					enabled:false
				}
			},
			legend: {
				itemDistance: 40,
				itemStyle: {
					"fontSize": "16px"
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
					x: 20,
					y:-40
				}
			},
			colors: [],
			series: []
		};
	}

	ngOnInit() {
		
	}



	setSixChartYear(yearId) {
		var id = yearId;
		this.sixYearActive = id;
	}

	setSevenChartYear(yearId) {
		var id = yearId;
		this.sevenYearActive = id;
	}

	setEightChartYear(yearId) {
		var id = yearId;
		this.eightYearActive = id;
	}

	setNineChartYear(yearId) {
		var id = yearId;
		this.nineYearActive = id;
	}

	setTenChartYear(yearId) {
		var id = yearId;
		this.tenYearActive = id;
	}

	setElevenChartYear(yearId) {
		var id = yearId;
		this.elevenYearActive = id;
	}
}
