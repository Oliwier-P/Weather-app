import { currentWeather, forecastWeather, City } from "../Types";

interface WeatherDaysProps {
  weather: currentWeather;
  forecast: forecastWeather[];
  city: City;
}

export default function WeatherDays({ weather, forecast, city }: WeatherDaysProps) {
  const days = ["Tuesday", "Wednesday", "Thursday"];

  return (
    <>
      <div className="weather-days">
        <div className="city-data">
          <span className="city">
            {city!.name}, {city!.country}
          </span>
          <span className="day">{city!.date}</span>
        </div>

        <div className="current-data">
          <span className="temperature">{weather!.in_celcius ? weather!.temp_c : weather!.temp_f}°C</span>
          <span className="description">{weather!.description}</span>
          <img className="current-image" src={`https://openweather.site/img/wn/${weather!.icon}.png`} />
        </div>

        <div className="future-data">
          {forecast.map((day, index) => {
            return (
              <div className="future-day" key={index}>
                <span className="future-day-text">{day.date_day}</span>
                <span className="future-temperature">{weather!.in_celcius ? day.temp_c : day.temp_f}°C</span>
                <div className="future-image"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
