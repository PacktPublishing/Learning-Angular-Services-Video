import {TestBed, async, inject, __core_private_testing_placeholder__} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {WeatherService} from './weather.service';
import {of} from 'rxjs';
import {Weather} from './weather.model';

let weatherService: WeatherService;
let httpClientSpy: { get: jasmine.Spy };
const mockResponse = {
  name: 'London'
};

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [WeatherService]
  }));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    expect(service).toBeTruthy();
  });

  it('#getWeather should be called', () => {
    weatherService = TestBed.get(WeatherService);

    let spy = spyOn(weatherService, 'getWeather').and.callThrough();

    weatherService.getWeather().subscribe();

    expect(spy).toHaveBeenCalled();
  });

  it('#getWeather should return data', async(inject([WeatherService],
    (weatherService) => {
      weatherService.getWeather()
        .subscribe(data => expect(data.length).toBeGreaterThan(0));
    })));

  it('#getWeatherByCity should return London', () => {
    let expectedResult = {
      name: 'London'
    };

    weatherService = new WeatherService(<any>httpClientSpy);

    let spy = spyOn(weatherService, 'getWeatherByCity').and.returnValue(of(mockResponse));

    weatherService.getWeatherByCity('London')
      .subscribe((data) => {
        expect(data).toEqual(expectedResult);
      });
  });

  it('#addWeather should be called', () => {

    let mockWeather = new Weather();
     mockWeather.id = 4;
     mockWeather.city = 'Mumbai';
     mockWeather.temp = 25;
     mockWeather.forecast = 'Sunny';

    weatherService = TestBed.get(WeatherService);

    let spy = spyOn(weatherService, 'addWeather').and.callThrough();

    weatherService.addWeather(mockWeather).subscribe();

    expect(spy).toHaveBeenCalled();
  });

  it('#addWeather should add new object', () => {
    weatherService = TestBed.get(WeatherService);

    let mockWeather = new Weather();
    mockWeather.id = 4;
    mockWeather.city = 'Mumbai';
    mockWeather.temp = 25;
    mockWeather.forecast = 'Sunny';

    let spy = spyOn(weatherService, 'addWeather').and.returnValue(of(mockWeather.city + ' added'));

    weatherService.addWeather(mockWeather)
      .subscribe(data => {
        expect(data).toEqual('Mumbai added');
      });
  });

  it('#deleteWeather should be called', () => {
    let mockWeather = new Weather();
    mockWeather.id = 4;
    mockWeather.city = 'Mumbai';
    mockWeather.temp = 25;
    mockWeather.forecast = 'Sunny';

    weatherService = TestBed.get(WeatherService);

    let spy = spyOn(weatherService, 'deleteWeather').and.callThrough();

    weatherService.deleteWeather(mockWeather)
      .subscribe();

    expect(spy).toHaveBeenCalled();
  });

  it('#deleteWeather should delete an object', () => {
    let mockWeather = new Weather();
    mockWeather.id = 1;
    mockWeather.city = 'London';
    mockWeather.temp = 10;
    mockWeather.forecast = 'Overcast with showers';

    weatherService = TestBed.get(WeatherService);

    let spy = spyOn(weatherService, 'deleteWeather').and.returnValue(of(mockWeather.city + ' deleted'));

    weatherService.deleteWeather(mockWeather)
      .subscribe(data => {
        expect(data).toEqual('London deleted');
      });
  });
});
