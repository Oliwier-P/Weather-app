import "./App.scss";
import { useEffect, useState } from "react";
import { currentWeatherType, forecastWeatherType, upcomingHoursType, cityType } from "./Types";

import { FetchData } from "./api";

import WeatherDays from "./components/WeatherDays";
import WeatherChart from "./components/WeatherChart";
import WeatherInformation from "./components/WeatherInformation";
import InputCity from "./components/InputCity";
import DegreeSwitch from "./components/DegreeSwitch";

export default function App() {
  const [city, setCity] = useState<cityType>({
    name: "",
    country: "",
    lat: "0",
    lng: "0",
  });
  const [weather, setWeather] = useState<currentWeatherType>({
    temp_c: 0,
    temp_f: 0,
    icon: "",
    description: "",
    feelslike_c: 0,
    feelslike_f: 0,
    pressure: 0,
    uv: 0,
    precip_mm: 0,
    wind_kph: 0,
    humidity: 0,
    cloud: 0,
    visibility: 0,
    in_celcius: true,
    date: "",
  });
  const [hourlyTemperature, setHourlyTemperature] = useState<upcomingHoursType[]>([]);
  const [forecast, setForecast] = useState<forecastWeatherType[]>([]);

  const fetchAndSetWeather = (latitude: string, longitude: string) => {
    FetchData(latitude, longitude)
      .then(({ newCity, newWeather, newHourly, newForecast }) => {
        setCity(newCity);
        setWeather(newWeather);
        setHourlyTemperature(newHourly);
        setForecast(newForecast);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  };

  const ChangeCity = (latitude: string, longitude: string) => {
    fetchAndSetWeather(latitude, longitude);
  };

  const switchStatus = (e: boolean) => {
    setWeather((prev) => {
      return {
        ...prev,
        in_celcius: !e,
      };
    });
  };

  useEffect(() => {
    if (city.name === "") {
      const defaultCoords = { latitude: "40.73061", longitude: "-73.935242" };

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchAndSetWeather(latitude.toString(), longitude.toString());
        },
        (error) => {
          console.warn("Geolocation error:", error.message);
          fetchAndSetWeather(defaultCoords.latitude, defaultCoords.longitude);
        }
      );
    }
  }, []);

  return (
    <div className="main-container">
      <WeatherDays weather={weather} forecast={forecast} city={city} />

      <div className="weather-data-container">
        <div className="input-and-switch-conatiner">
          <InputCity handleSelectedCity={ChangeCity} />
          <DegreeSwitch onChange={switchStatus} />
        </div>
        <div className="weather-information-container">
          <WeatherChart in_celcius={weather!.in_celcius} hourlyData={hourlyTemperature} />
          <WeatherInformation weather={weather} />
        </div>
      </div>
    </div>
  );
}
