import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighLightDirective } from './high-light.directive';
import { DisplayDirective } from './display.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighLightDirective,
    DisplayDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
