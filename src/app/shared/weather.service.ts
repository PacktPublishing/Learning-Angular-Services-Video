import {Injectable} from '@angular/core';
import {WEATHER} from './mock-weather';
import {Weather} from './weather.model';
import {of, Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '7bae24b92bf621d8e53f7c2f29907902';
  baseUri
    = 'http://api.openweathermap.org/data/2.5/find?&cnt=10&units=metric&appid='
  lat = 51.5285582;
  lon = -0.2416808;

  constructor(private http: HttpClient) {
  }

  getWeather() {
    let uri = this.baseUri + this.apiKey + '&lat=' + this.lat + '&lon=' + this.lon;
    return this.http.get(uri);
  }

  getWeatherByCity(city: string) {
    let uri = 'http://api.openweathermap.org/data/2.5/weather?q='
    + city + '&appid=' + this.apiKey;

    return this.http.get(uri);
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
