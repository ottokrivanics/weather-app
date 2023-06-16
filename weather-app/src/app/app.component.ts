import { Component } from '@angular/core';
import { Geodata } from './classes/geodata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  dataArray: Geodata[] = 
  [
    {name: "Budapest", country: "Hungary", lat: "47.4979937", long: "19.0403594"},
    {name: "Paris", country: "France", lat: "48.8588897", long: "2.320041"},
    {name: "Seattle", country: "USA", lat: "47.6038321", long: "-122.330062"},
    {name: "Tokyo", country: "Japan", lat: "35.6812665", long: "139.757653"}                    
  ]
}
