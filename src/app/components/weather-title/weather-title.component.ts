import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-title',
  templateUrl: './weather-title.component.html',
  styleUrls: ['./weather-title.component.scss']
})
export class WeatherTitleComponent implements OnInit {

  currentCity: string;
  currentCountry: string;
  @Input() titleWeather: any;
  constructor() { }

  ngOnInit() {
    this.currentCity = this.titleWeather.name;
    this.currentCountry = this.titleWeather.country;
  }
  updateT(val) {
    this.currentCity = val.name;
    this.currentCountry = val.country;
  }
}
