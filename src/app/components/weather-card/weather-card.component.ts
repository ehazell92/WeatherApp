import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() theWeather: any;
  constructor() { }
  cityDate: any;
  cityTemp: any;
  cityWeather: any;
  cardImagePath: any;

  ngOnInit() {
  }

}
