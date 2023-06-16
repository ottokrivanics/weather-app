import { Component, OnInit, Input } from '@angular/core';
import { WeatherServiceService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  city: string;
  @Input('name') cityName: string;
  @Input('country') countryName: string;
  @Input('lat') latitude: string;
  @Input('long') longitude: string;
  temp: string;  

  constructor(private weatherService: WeatherServiceService) {
  }

   ngOnInit(): void {
    this.city = this.cityName;
    this.weatherService.getWeather(this.latitude, this.longitude).subscribe({
      next: (weather: any) => {
        this.temp = `${Math.floor(weather.main.temp - 273.15)} °C`;
      },
      error: (err) => {},
      complete: () => {}, 
    });
  }
}
