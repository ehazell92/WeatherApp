import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IWeatherPack } from '../models/weather-pack';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  private country = 'us';
  private apiK = '507516e9b15d09f7044d6ba3ad6deff5';

  constructor(private http: HttpClient) {}
  getWeather(zip): Observable<IWeatherPack[]> {
    if (zip.length < 1) { zip = '07030'; }
    const baseURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=' + zip + ',' + this.country + '&appid=' + this.apiK + '';
    return this.http.get<IWeatherPack[]>(baseURL).pipe(
      tap(data => console.log('')),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    const errorMessage = '';
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
