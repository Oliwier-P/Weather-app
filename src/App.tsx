import "./App.scss";
import { useEffect, useState } from "react";
import { currentWeather, forecastWeather } from "./Types";
import React from "react";
import citiesData from "./cities.json";
import WeatherDays from "./components/WeatherDays";
import WeatherTemperature from "./components/WeatherTemperature";
import WeatherInformation from "./components/WeatherInformation";
import InputCity from "./components/InputCity";
import DegreeSwitch from "./components/DegreeSwitch";

export default function App() {
  const [weather, setWeather] = useState<currentWeather>();
  const [forecast1, setForecast1] = useState<forecastWeather>({ temp_c: 0, icon: "", date: "" });
  const [forecast2, setForecast2] = useState<forecastWeather>({ temp_c: 0, icon: "", date: "" });
  const [forecast3, setForecast3] = useState<forecastWeather>({ temp_c: 0, icon: "", date: "" });

  const [city, setCity] = useState("Slupsk");

  const FetchData = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=c890eee18037494394e111328230903&q=${city}&days=5&aqi=no&alerts=no`)
      .then((respond) => respond.json())
      .then(
        (data) => (
          console.log(data),
          setWeather({
            temp_c: Math.round(data.current.temp_c),
            wind_kph: ((data.current.wind_kph * 1000) / 3600).toFixed(2),
            humidity: data.current.humidity,
            uv: data.current.uv,
            precip_mm: data.current.precip_mm,
            pressure: data.current.pressure_mb,
            icon: data.current.condition.icon,
            cloud: data.current.cloud,
          }),
          setForecast1({
            temp_c: Math.round(data.forecast.forecastday[0].day.avgtemp_c),
            icon: data.forecast.forecastday[0].day.condition.icon,
            date: data.forecast.forecastday[0].date,
          }),
          setForecast2({
            temp_c: Math.round(data.forecast.forecastday[1].day.avgtemp_c),
            icon: data.forecast.forecastday[1].day.condition.icon,
            date: data.forecast.forecastday[1].date,
          }),
          setForecast3({
            temp_c: Math.round(data.forecast.forecastday[2].day.avgtemp_c),
            icon: data.forecast.forecastday[2].day.condition.icon,
            date: data.forecast.forecastday[2].date,
          })
        )
      );
  };

  const ChangeCity = (e: React.FormEvent) => {
    e.preventDefault();
    FetchData();
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="main-container">
      <WeatherDays />

      <div className="weather-data-container">
        <div className="input-and-switch-conatiner">
          <InputCity />
          <DegreeSwitch />
        </div>

        <WeatherTemperature />
        <WeatherInformation />
      </div>
    </div>
  );
}
