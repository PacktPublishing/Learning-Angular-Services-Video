import {Injectable} from '@angular/core';
import {WEATHER} from './mock-weather';
import {Weather} from './weather.model';
import {of, Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() {
  }

  getWeather() {
    return of(WEATHER);
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
