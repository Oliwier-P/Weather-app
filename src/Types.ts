type currentWeatherType = {
  temp_c: number;
  temp_f: number;
  icon: string;
  description: string;
  feelslike_c: number;
  feelslike_f: number;
  pressure: number;
  uv: number;
  precip_mm: number;
  wind_kph: number;
  humidity: number;
  cloud: number;
  visibility: number;
  in_celcius: boolean;
  date: string;
};

type forecastWeatherType = {
  date_day: string;
  temp_c: number;
  temp_f: number;
  icon: string;
};

type upcomingHoursType = {
  time: string;
  temp_c: number;
  temp_f: number;
};

type cityType = {
  country: string;
  name: string;
  lat: string;
  lng: string;
};

type fetchDataResponseType = {
  newCity: cityType;
  newWeather: currentWeatherType;
  newHourly: upcomingHoursType[];
  newForecast: forecastWeatherType[];
};

export type { currentWeatherType, forecastWeatherType, upcomingHoursType, cityType, fetchDataResponseType };
