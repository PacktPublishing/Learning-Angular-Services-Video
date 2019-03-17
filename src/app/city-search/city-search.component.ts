import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../shared/weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  city: string;
  cityWeather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getCity(){
    this.weatherService.getWeatherByCity(this.city)
      .subscribe(data => this.cityWeather = data)
  }

}
