import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../shared/weather.service';
import {Weather} from '../shared/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: any;
  selectedCity: any;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getCoords();

  }

  getWeather(position: any) {
    this.weatherService.getWeather(position.coords.latitude, position.coords.longitude)
    .subscribe(
      (data) => this.weather = data
    );
  }

  getCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.getWeather(position);
    })
  }

  getWeatherPromise() {
    this.weatherService.getWeatherPromise().then((data) => {
      this.weather = data;
    }).catch((error) => {
      console.log(error);
    });
  }

  setHomeCity(event: Weather) {
    console.log(event);
  }

}
