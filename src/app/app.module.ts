import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgsRevealModule } from 'ng-scrollreveal';
import { ChartModule } from 'angular2-highcharts';
import { SelectModule } from 'ng-select';

import { AppComponent } from './app.component';
import { IpmHeaderComponent } from './ipm-header/ipm-header.component';
import { IpmLandingComponent } from './ipm-landing/ipm-landing.component';
import { IpmResultsComponent } from './ipm-results/ipm-results.component';
import { IpmFooterComponent } from './ipm-footer/ipm-footer.component';
import { ChartDataService } from './chart.data.service';
import { MapService } from './map.service';

import { ChartOneComponent } from './charts/chart-one/chart-one.component';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { ChartTwoComponent } from './charts/chart-two/chart-two.component';
import { ChartThreeComponent } from './charts/chart-three/chart-three.component';
import { ChartFourComponent } from './charts/chart-four/chart-four.component';
import { ChartFiveComponent } from './charts/chart-five/chart-five.component';
import { ChartSixComponent } from './charts/chart-six/chart-six.component';
import { ChartSevenComponent } from './charts/chart-seven/chart-seven.component';
import { IpmMapComponent } from './ipm-map/ipm-map.component';
import { ChartInfrastructureComponent } from './charts/chart-infrastructure/chart-infrastructure.component';
import { ChartSplitComponent } from './charts/chart-split/chart-split.component';
import { ChartYearComponent } from './charts/chart-year/chart-year.component';
import { ChartPopulationComponent } from './charts/chart-population/chart-population.component';
import { ChartExercisedComponent } from './charts/chart-exercised/chart-exercised.component';
import { ChartPercentageComponent } from './charts/chart-percentage/chart-percentage.component';
import { ChartPercentageInvestmentComponent } from './charts/chart-percentage-investment/chart-percentage-investment.component';
import { ChartInvestmentComponent } from './charts/chart-investment/chart-investment.component';
import { IpmDownloadComponent } from './ipm-download/ipm-download.component';

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
  },
  {
    path: 'mapa',
    component: IpmMapComponent
  },
  {
    path: 'descargas',
    component: IpmDownloadComponent
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
    ChartSixComponent,
    ChartSevenComponent,
    IpmMapComponent,
    ChartInfrastructureComponent,
    ChartSplitComponent,
    ChartYearComponent,
    ChartPopulationComponent,
    ChartExercisedComponent,
    ChartPercentageComponent,
    ChartPercentageInvestmentComponent,
    ChartInvestmentComponent,
    IpmDownloadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgsRevealModule.forRoot(),
    ChartModule,
    SelectModule
  ],
  providers: [
    ChartDataService,
    MapService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
