import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IWeatherPack } from '../app/models/weather-pack';
import { InitService } from '../app/services/init.service';
import { WeatherTitleComponent } from '../app/components/weather-title/weather-title.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [InitService]
})

export class AppComponent implements OnInit {
  weatherPck: IWeatherPack;
  weathers: any;
  title = 'TheWeatherReport';
  @ViewChild(WeatherTitleComponent) wTitleCh;

  constructor(private weatherService: InitService) {}
  ngOnInit() {
    this.build('');
  }
  build(v): void {
    this.weatherService.getWeather(v).subscribe(
      weathers => {
        this.weathers = weathers;
        const currentDay = this.weathers.list[0].dt_txt.split(' ')[0].split('-'), dayWthr = [];
        let wthrCount = 0;
        for (let d = 0; d < this.weathers.list.length; d++) {
          if (wthrCount < 2) {
            if (Number(this.weathers.list[d].dt_txt.split(' ')[0].split('-')[2]) > Number(currentDay[2])) {
              dayWthr.push(this.weathers.list[d]);
              wthrCount++;
              currentDay[2] = Number(this.weathers.list[d].dt_txt.split(' ')[0].split('-')[2]);
            }
          }
        }

        const weatherArr = [this.weathers.list[0], dayWthr[0], dayWthr[1]];
        for (let w = 0; w < weatherArr.length; w++) {
          let theTemp = 0, theTempMi = 0, theTempMa = 0;

          theTemp = ((1.8) * (Number(weatherArr[w].main.temp) - 273)) + 32;
          theTempMi = ((1.8) * (Number(weatherArr[w].main.temp_min) - 273)) + 32;
          theTempMa = ((1.8) * (Number(weatherArr[w].main.temp_max) - 273)) + 32;

          weatherArr[w].main.temp = Math.round(theTemp);
          weatherArr[w].main.temp_max = theTempMa.toFixed(1);
          weatherArr[w].main.temp_min = theTempMi.toFixed(1);
          weatherArr[w].dt_txt = weatherArr[w].dt_txt.split(' ')[0].split('-');
          weatherArr[w].dt_txt = weatherArr[w].dt_txt[1] + ' / ' + weatherArr[w].dt_txt[2];
          weatherArr[w].dt = '../../assets/media/' + weatherArr[w].weather[0].main + '.png';
        }
        // FIX the temp min and max values when displaying up and down, may need to be average :(
        this.weatherPck = {
          name: this.weathers.city.name,
          country: this.weathers.city.country,
          weatherPack: weatherArr
        };
        if (v.length > 1) {
          this.wTitleCh.updateT(this.weatherPck);
        }
      },
    );
  }
}
