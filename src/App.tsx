import "./App.scss";
import { useEffect, useState } from "react";
import { currentWeather, forecastWeather, City, upcomingHours } from "./Types";
import { format, roundToNearestHours, roundToNearestMinutes, set } from "date-fns";
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
  const [city, setCity] = useState<City>({
    name: "",
    country: "",
    lat: "0",
    lng: "0",
  });
  const [forecast, setForecast] = useState<forecastWeather[]>([]);
  const [hourlyTemperature, setHourlyTemperature] = useState<upcomingHours[]>([]);

  const FetchData = (latitude: string, longitude: string) => {
    const lat = latitude;
    const lng = longitude;

    const date = new Date();

    const todayDate = format(date, "yyyy-MM-dd");
    const in5DaysDate = format(date.setDate(date.getDate() + 5), "yyyy-MM-dd");

    const currentTime = format(roundToNearestHours(new Date(), { nearestTo: 1 }), "HH:mm:ss");

    const url = `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${lat}/${lng}&units=metric`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "open-weather13.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((result) => {
        const formatedTodayDate = format(new Date(), "eeee, MMMM do");

        const tempCity = {
          name: result.city.name,
          country: result.city.country,
          lat: result.city.coord.lat.toString(),
          lng: result.city.coord.lon.toString(),
        };

        setCity(tempCity);

        const newWeather = {
          temp_c: parseInt(result.list[0].main.temp.toFixed(2)),
          temp_f: parseInt((result.list[0].main.temp * 1.8 + 32).toFixed(2)),
          icon: result.list[0].weather[0].icon,
          description: result.list[0].weather[0].description,
          feelslike_c: parseInt(result.list[0].main.feels_like.toFixed(2)),
          feelslike_f: parseInt((result.list[0].main.feels_like * 1.8 + 32).toFixed(2)),
          pressure: result.list[0].main.pressure,
          uv: 2,
          precip_mm: result.list[0].rain ? result.list[0].rain["3h"] : 0,
          wind_kph: result.list[0].wind.speed,
          humidity: result.list[0].main.humidity,
          cloud: result.list[0].clouds.all,
          visibility: result.list[0].visibility,
          in_celcius: true,
          date: formatedTodayDate,
        };

        setWeather(newWeather);

        const newHourly = result.list.slice(0, 10).map((item: any) => {
          return {
            time: format(item.dt_txt, "HH:mm"),
            temp_c: parseInt(item.main.temp.toFixed(2)),
            temp_f: parseInt((item.main.temp * 1.8 + 32).toFixed(2)),
          };
        });

        setHourlyTemperature(newHourly);

        const newForecast = result.list.map((item: any) => {
          return {
            date_day: format(item.dt_txt, "eeee"),
            temp_c: parseInt(item.main.temp.toFixed(2)),
            temp_f: parseInt((item.main.temp * 1.8 + 32).toFixed(2)),
            icon: item.weather[0].icon,
          };
        });

        setForecast(newForecast.splice(1, 5));
      });
  };

  const ChangeCity = (latitude: string, longitude: string) => {
    FetchData(latitude, longitude);
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
      navigator.geolocation.getCurrentPosition(
        (position) => {
          FetchData(position.coords.latitude.toString(), position.coords.longitude.toString());
        },
        (error) => {
          // Use default coordinates if access to location is blocked
          FetchData("40.73061", "-73.935242");
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
