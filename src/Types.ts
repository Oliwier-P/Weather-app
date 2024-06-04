type currentWeather = {
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

type forecastWeather = {
  date_day: string;
  temp_c: number;
  temp_f: number;
  icon: string;
};

type upcomingHours = {
  time: string;
  temp_c: number;
  temp_f: number;
};

type City = {
  country: string;
  name: string;
  lat: string;
  lng: string;
};

export type { currentWeather, forecastWeather, upcomingHours, City };
