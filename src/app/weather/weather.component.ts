import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../shared/weather.service';
import {Weather} from '../shared/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: Weather[];
  selectedCity: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weather = this.weatherService.getWeather();
  }

  setHomeCity(event: Weather) {
    console.log(event);
  }

}
