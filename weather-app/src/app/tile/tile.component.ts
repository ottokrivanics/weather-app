import { Component } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
  cityName: string = "Budapest";
  countryName: string = "Hungary";
  temp: string = "32 °C";  
}
