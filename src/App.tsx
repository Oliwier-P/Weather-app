import "./App.scss";
import { useEffect, useState } from "react";
import { currentWeather, forecastWeather } from "./Types";
import { format, roundToNearestHours, roundToNearestMinutes } from "date-fns";
import React from "react";
import citiesData from "./cities.json";
import WeatherDays from "./components/WeatherDays";
import WeatherChart from "./components/WeatherChart";
import WeatherInformation from "./components/WeatherInformation";
import InputCity from "./components/InputCity";
import DegreeSwitch from "./components/DegreeSwitch";

export default function App() {
  const [weather, setWeather] = useState<currentWeather>({
    temp_c: 0,
    icon: "",
    feelslike_c: 0,
    pressure: 0,
    uv: 0,
    precip_mm: 0,
    wind_kph: 0,
    humidity: 0,
    cloud: 0,
    visibility: 0,
  });
  const [forecast, setForecast] = useState<forecastWeather[]>([]);

  const [city, setCity] = useState("London");

  const FetchData = () => {
    const lat = 41.385063;
    const lng = 2.173404;

    const date = new Date();

    const todayDate = format(date, "yyyy-MM-dd");
    const in5DaysDate = format(date.setDate(date.getDate() + 5), "yyyy-MM-dd");

    const currentTime = format(roundToNearestHours(new Date(), { nearestTo: 1 }), "HH:mm:ss");

    // fetch(``)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   });
    // const url = `https://meteostat.p.rapidapi.com/point/hourly?lat=43.6667&lon=-79.4&alt=113&start=2024-05-28&end=2024-06-02&tz=America%2FToronto`;
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-key": "cd113aa522mshdaa86a15d5fc4f7p18a4fcjsnd5c35fa214b8",
    //     "x-rapidapi-host": "meteostat.p.rapidapi.com",
    //   },
    // };

    // fetch(url, options)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result.data);

    //     const todaysIndex = result.data.findIndex((item: any) => item.time == `${todayDate} ${currentTime}`);
    //     console.log(todaysIndex);

    //   });
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
      <WeatherDays weather={weather} />

      <div className="weather-data-container">
        <div className="input-and-switch-conatiner">
          <InputCity />
          <DegreeSwitch />
        </div>
        <div className="weather-information-container">
          <WeatherChart />
          <WeatherInformation weather={weather} />
        </div>
      </div>
    </div>
  );
}
