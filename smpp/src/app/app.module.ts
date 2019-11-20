import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';

import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { NnInputComponent } from './nn-input/nn-input.component';
import { StockHistoryGraphComponent } from './nn-input/stock-history-graph/stock-history-graph.component';

@NgModule({
  declarations: [AppComponent, NnInputComponent, StockHistoryGraphComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GoogleChartsModule.forRoot(),
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
