import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../shared/weather.service';
import {Weather} from '../shared/weather.model';
import {WeatherOwm} from '../shared/weather-owm.model';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: WeatherOwm[];
  selectedCity: Weather;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather().subscribe(
      (data: any) => this.weather = data.list
    );
  }

  setHomeCity(event: Weather) {
    console.log(event);
  }

}
