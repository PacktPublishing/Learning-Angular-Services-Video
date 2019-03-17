import {Injectable} from '@angular/core';
import {WEATHER} from './mock-weather';
import {Weather} from './weather.model';
import {of, Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '7bae24b92bf621d8e53f7c2f29907902';

  baseUri = 'http://api.openweathermap.org/data/2.5/'

  find = 'find?';
  ampersand = '&';
  lat = 'lat=';
  lon = 'lon=';
  cnt = 'cnt=';
  unts = 'units=';
  appId = 'appid=';
  weather = 'weather?';
  city = 'q=';

  count = 10;
  units = 'metric';

  // weather?q={city name}

  constructor(private http: HttpClient) {
  }

  getWeather(lat: number, lon: number) {

    lat = 53.472225;
    lon = -2.2935023;

    const uri = this.baseUri + this.find + this.lat + lat + this.ampersand
    + this.lon + lon + this.ampersand + this.cnt + this.count + this.ampersand
    + this.unts + this.units + this.ampersand + this.appId + this.apiKey;

    return this.http.get(uri);
  }

  getWeatherByCity(city: string) {

    const uri = this.baseUri + this.weather + this.ampersand + this.unts +
    this.units + this.ampersand + this.city + city + this.ampersand
    + this.appId + this.apiKey;

    return this.http.get(uri);
  }

  getWeatherPromise() {
    const weatherProm = of(WEATHER).toPromise();

    return weatherProm;
  }

  getHomeCity() {
    return of(WEATHER).pipe(
      tap(res => res.forEach((x) => {
        console.log(`Tap: ${x.id}, city ${x.city}`);
      })),
      catchError(this.handleError(`getHomeCity() failed, city=${WEATHER[0].city}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  setWeather(weather: Weather) {
    WEATHER.push(weather);
  }
}
