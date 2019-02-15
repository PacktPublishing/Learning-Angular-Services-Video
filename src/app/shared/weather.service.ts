import { Injectable } from '@angular/core';
import { WEATHER } from './mock-weather';
import { Weather } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getWeather() {
    return WEATHER;
  }

  setWeather(weather: Weather) {
    WEATHER.push(weather);
  }
}
