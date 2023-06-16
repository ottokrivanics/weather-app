import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getUrl(lat: string, long: string): string {
    return "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=4e0f62859c4b83cad567e0bd3a648de1";
  }

  getWeather(lat: string, long: string): Observable<any> {
    const url = this.getUrl(lat, long);
    return this.http.get(url);
  }
}
