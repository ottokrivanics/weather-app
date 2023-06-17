import { Component } from '@angular/core';
import { Geodata } from './classes/geodata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'weather-app';
  cityList: string[] = ["Budapest", "Paris", "Seattle", "Tokyo"];
}
