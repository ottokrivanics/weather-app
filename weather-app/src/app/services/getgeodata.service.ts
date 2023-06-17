import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetgeodataService {

  url: string = environment.geodataUrl;
  headerData = new HttpHeaders({"X-Api-Key" : environment.geodataApiKey});

  constructor(private http: HttpClient) { }

  getGeodata(cityName: string): Observable<any> {
    return this.http.get(`${this.url + cityName}`, {headers: this.headerData});
  }
}
