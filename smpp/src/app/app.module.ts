import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { NnInputComponent } from './nn-input/nn-input.component';
import { StockHistoryGraphComponent } from './nn-input/stock-history-graph/stock-history-graph.component';
import { PredictionsOutputComponent } from './predictions-output/predictions-output.component';

@NgModule({
  declarations: [
    AppComponent,
    NnInputComponent,
    StockHistoryGraphComponent,
    PredictionsOutputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GoogleChartsModule.forRoot(),
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTabsModule,
    MatToolbarModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
