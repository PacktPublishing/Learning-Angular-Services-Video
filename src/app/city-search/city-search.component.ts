import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../shared/weather.service';
import {WeatherOwm} from '../shared/weather-owm.model';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  cityName: string;
  city: WeatherOwm;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeatherByCity() {
    this.weatherService.getWeatherByCity(this.cityName)
      .subscribe( (data: any) => this.city = data)
  };

}
