import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class WeatherServiceService {

  constructor(private http: HttpClient) { }

  getUrl(lat: string, long: string): string {
    return `${environment.weatherUrlStart + lat + "&lon=" + long + environment.weatherApiKey}`;
  }

  getWeather(lat: string, long: string): Observable<any> {
    const url = this.getUrl(lat, long);
    return this.http.get(url);
  }
}
