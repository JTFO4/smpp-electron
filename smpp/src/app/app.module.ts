import { ApiInterfaceModule } from './api-interface/api-interface.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ApiInterfaceModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
