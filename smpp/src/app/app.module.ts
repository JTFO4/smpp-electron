import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NnInputComponent } from './components/nn-input/nn-input.component';
import { StockGraphComponent } from './components/stock-graph/stock-graph.component';
import { EsOutputComponent } from './components/es-output/es-output.component';

@NgModule({
  declarations: [
    AppComponent,
    NnInputComponent,
    StockGraphComponent,
    EsOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
