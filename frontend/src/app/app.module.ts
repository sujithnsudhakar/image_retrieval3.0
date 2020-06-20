import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HighchartsChartComponent } from 'highcharts-angular';
import  More from 'highcharts/highcharts-more';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
// Load the exporting module.
import Exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
// Initialize exporting module.
Exporting(Highcharts);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComparemodalComponent } from './comparemodal/comparemodal.component';

@NgModule({
  declarations: [
    AppComponent,
    ComparemodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule   
  ],
  entryComponents:[
    ComparemodalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
