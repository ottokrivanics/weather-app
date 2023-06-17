import { Component, OnInit, Input } from '@angular/core';
import { GetgeodataService } from 'src/app/services/getgeodata.service';
import { WeatherServiceService } from 'src/app/services/weather-service.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input('name') cityInput: string;
  cityName: string;
  countryName: string;
  latitude: string;
  longitude: string;
  temp: string;
  iconUrl: string;
  weatherIconUrl: string;  

  constructor(private weatherService: WeatherServiceService, private geodataService: GetgeodataService) {
    this.iconUrl = "https://openweathermap.org/img/wn/";
  }

  ngOnInit(): void {
    this.cityName = this.cityInput;
    this.geodataService.getGeodata(this.cityName).subscribe({
      next: (cityData: any) => {
        this.countryName = cityData[0].country;
        this.latitude = cityData[0].latitude;
        this.longitude = cityData[0].longitude;
        this.weatherService.getWeather(this.latitude, this.longitude).subscribe({
          next: (weather: any) => {
            this.temp = `${Math.floor(weather.main.temp - 273.15)} °C`;
            this.weatherIconUrl = `${this.iconUrl + weather.weather[0].icon + "@2x.png"}`;
          },
          error: (err) => {},
          complete: () => {}, 
        });
      },
      error: (err) => {},
      complete: () => {}, 
    });
  }
}
