export class WeatherOwm {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number };
  name: string;
  sys: {
    country: string;
    id: number;
    message: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: { speed: number; deg: number };
}
