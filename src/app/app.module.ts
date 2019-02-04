import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterModule } from './material';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { WeatherControlBarComponent } from './components/weather-control-bar/weather-control-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherTitleComponent } from './components/weather-title/weather-title.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherControlBarComponent,
    WeatherTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
