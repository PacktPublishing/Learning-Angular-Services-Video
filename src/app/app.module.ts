import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoggingService} from './shared/logging.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
