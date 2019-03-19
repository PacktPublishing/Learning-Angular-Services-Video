import {Component, OnInit} from '@angular/core';
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

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getWeather();
    // this.getWeatherPromise();
    // this.weatherService.getHomeCity().subscribe((res) => console.log(res));
  }

  getWeather() {
    this.weatherService.getWeather().subscribe(
      (data) => this.weather = data
    );
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
