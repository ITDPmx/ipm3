import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IpmHeaderComponent } from './ipm-header/ipm-header.component';
import { IpmLandingComponent } from './ipm-landing/ipm-landing.component';
import { IpmResultsComponent } from './ipm-results/ipm-results.component';
import { IpmFooterComponent } from './ipm-footer/ipm-footer.component';
import { ChartOneComponent } from './charts/chart-one/chart-one.component';
import { ChartSixDataService } from './chart.data.service';

import { NgsRevealModule } from 'ng-scrollreveal';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { ChartTwoComponent } from './charts/chart-two/chart-two.component';
import { ChartThreeComponent } from './charts/chart-three/chart-three.component';
import { ChartFourComponent } from './charts/chart-four/chart-four.component';
import { ChartFiveComponent } from './charts/chart-five/chart-five.component';
import { ChartSixComponent } from './charts/chart-six/chart-six.component';

export declare let require: any;
const Highcharts = require('highcharts');
export function highchartsFactory() {
  const _highcharts = require('highcharts');
  const _exporting = require('highcharts/modules/exporting');
  _exporting(_highcharts);
  return _highcharts;
}
Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});

const routes = [
  {
    path: '',
    component: IpmLandingComponent
  },
  {
    path: 'resultados',
    component: IpmResultsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IpmHeaderComponent,
    IpmLandingComponent,
    IpmResultsComponent,
    IpmFooterComponent,
    ChartOneComponent,
    ChartTwoComponent,
    ChartThreeComponent,
    ChartFourComponent,
    ChartFiveComponent,
    ChartSixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgsRevealModule.forRoot(),
    ChartModule
  ],
  providers: [
    ChartSixDataService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
