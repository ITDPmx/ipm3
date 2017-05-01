import { Component, OnInit, Output} from '@angular/core';
import {NgsRevealModule} from 'ng-scrollreveal';
export declare let require: any;
const Chart = require('highcharts');
@Component({
	selector: 'ipm-results',
	templateUrl: './ipm-results.component.html',
	styleUrls: ['./ipm-results.component.css']
})

export class IpmResultsComponent implements OnInit {
	private ChartOne: object;
	private ChartTwo: object;
	private ChartThree: object;
	private ChartFour: object;
	private ChartFive: object;
	private ChartSix: object;
	private ChartSeven: object;
	private sixYearActive: string;
	private sevenYearActive: string;

	constructor() {
		this.sixYearActive = "2011";
		this.sevenYearActive = "2011";

		this.ChartOne = {
			chart: {
				type: 'column',
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 600
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
				height: 650,
				plotAreaHeight: 650
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
			loading: {
			hideDuration: 100,
			labelStyle: { "fontWeight": "bold", "position": "relative", "top": "45%" },
			showDuration: 100,
			style: { "position": "absolute", "backgroundColor": "#ffffff", "opacity": 0.5, "textAlign": "center" },
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
				height: 600
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
				pointFormat: '<span style="color:{series.color};font-weight:bold;">{series.name}</span>: <b>{point.y}</b><br/>',
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
				height: 600
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
				pointFormat: '<span style="color:{series.color};font-weight:bold;">{series.name}</span>: <b>{point.y}</b><br/>',
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
				height: 500
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
					dataLabels: {
						enabled: true,
						color: 'black',
						formatter:function() {
							return parseInt(this.percentage) + '%';
						}
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
						color: 'black',
						formatter:function() {
							return parseInt(this.percentage) + '%';
						}
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
			colors: [],
			series: []
		}
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
}
