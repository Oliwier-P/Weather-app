type currentWeather = {
  temp_c: number;
  icon: string;
  feelslike_c: number;
  pressure: number;
  uv: number;
  precip_mm: number;
  wind_kph: number;
  humidity: number;
  cloud: number;
  visibility: number;
};

type forecastWeather = {
  date_day: string;
  temp_c: number;
  icon: string;
};

type upcomingHours = {
  time: string;
  temp_c: number;
};

type City = {
  country: string;
  name: string;
  lat: number;
  lng: number;
};

export type { currentWeather, forecastWeather, upcomingHours, City };
