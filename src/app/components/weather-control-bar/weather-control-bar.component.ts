import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-control-bar',
  templateUrl: './weather-control-bar.component.html',
  styleUrls: ['./weather-control-bar.component.scss']
})
export class WeatherControlBarComponent implements OnInit {
  @Output() theZip = new EventEmitter;
  zip: any;
  constructor() { }
  ngOnInit() {
  }

  update() {
    this.theZip.emit(this.zip);
  }
}
