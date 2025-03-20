import { currentWeatherType, forecastWeatherType, cityType } from "../Types";

interface WeatherDaysProps {
  weather: currentWeatherType;
  forecast: forecastWeatherType[];
  city: cityType;
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
          <span className="day">{weather!.date}</span>
        </div>

        <div className="current-data">
          <span className="temperature">{weather!.in_celcius ? `${weather!.temp_c}°C` : `${weather!.temp_f}°F`}</span>
          <span className="description">{weather!.description}</span>
          <img className="current-image" alt="current-weather-image" src={`https://openweather.site/img/wn/${weather!.icon}.png`} />
        </div>

        <div className="future-data">
          {forecast.map((day, index) => {
            return (
              <div className="future-day" key={index}>
                <span className="future-day-text">{day.date_day}</span>
                <span className="future-temperature">{weather!.in_celcius ? `${day.temp_c}°C` : `${day.temp_f}°F`}</span>
                <img className="future-image" alt="forecast-weather-image" src={`https://openweather.site/img/wn/${day!.icon}.png`} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
