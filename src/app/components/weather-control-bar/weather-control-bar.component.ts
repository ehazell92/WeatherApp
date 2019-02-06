import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-control-bar',
  templateUrl: './weather-control-bar.component.html',
  styleUrls: ['./weather-control-bar.component.scss']
})
export class WeatherControlBarComponent implements OnInit {
  @Output() theZip = new EventEmitter;
  @ViewChild('theZ') zipp: ElementRef;
  zip: any;
  cleanZip: number;
  constructor() { }
  ngOnInit() {
  }

  update() {
    this.theZip.emit(this.zip);
  }
  _keyUp(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    const inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      this.zipp.nativeElement.value = this.zip.replace(/[^0-9]+/g, '');
    }
  }
}
