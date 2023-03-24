import './App.css'
import { useEffect, useState } from 'react'; 
import { currentWeather, forecastWeather } from './Types';
import CityBox from './components/CityBox';
import WeatherNow from './components/WeatherNow';
import WeatherFuture from './components/WeatherFuture';
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import cities from './cities.json';

export default function App() {

  const [weather, setWeather] = useState<currentWeather>();
  const [forecast1, setForecast1] = useState<forecastWeather>({ temp_c: 0, icon: "", date: "" });
  const [forecast2, setForecast2] = useState<forecastWeather>({ temp_c: 0, icon: "", date: "" });
  const [forecast3, setForecast3] = useState<forecastWeather>({ temp_c: 0, icon: "", date: "" });

  const [city, setCity] = useState("Slupsk");

  const [value, setValue] = useState<string | null>();
  const [inputValue, setInputValue] = useState<string>('');

  const city_list = [''];

  const FetchData = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=c890eee18037494394e111328230903&q=${city}&days=4&aqi=no&alerts=no`)
    .then((respond) => respond.json())
    .then((data) => (
      setWeather(
        {
          temp_c: Math.round(data.current.temp_c),
          wind_kph: data.current.wind_kph,
          humidity: data.current.humidity,
          uv: data.current.uv,
          precip_mm: data.current.precip_mm,
          pressure: data.current.pressure_mb,
          icon: data.current.condition.icon,
          cloud: data.current.cloud
        }
      ),
      setForecast1(
        {
          temp_c: Math.round(data.forecast.forecastday[1].day.avgtemp_c),
          icon: data.forecast.forecastday[1].day.condition.icon,
          date: data.forecast.forecastday[1].date
        }
      ),
      setForecast2(
        {
          temp_c: Math.round(data.forecast.forecastday[2].day.avgtemp_c),
          icon: data.forecast.forecastday[2].day.condition.icon,
          date: data.forecast.forecastday[2].date
        }
      ),
      setForecast3(
        {
          temp_c: Math.round(data.forecast.forecastday[3].day.avgtemp_c),
          icon: data.forecast.forecastday[3].day.condition.icon,
          date: data.forecast.forecastday[3].date
        }
      )
    ));
  }

  useEffect(() => {
    FetchData();
  }, []);
  
  return (
    <>

      <div className='main-container wrap-flex' >

        <div className='fav-cities' >
          
          <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {setValue(newValue)}}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {setInputValue(newInputValue)}}
            id="controllable-states-demo"
            options={city_list}
            renderInput={(params) => <TextField {...params} label="City" />}
            className="autocomplete"
          />
          <CityBox name={city} temp={weather?.temp_c} icon={weather?.icon} />
        </div>

        <div className='weather-div wrap-flex' >
          <div className='weather-div-names' >Poland, Słupsk</div>
          <WeatherNow 
          temperature={weather?.temp_c} 
          wind={weather?.wind_kph} 
          humidity={weather?.humidity}
          uv={weather?.uv}  
          precip={weather?.precip_mm}
          pressure={weather?.pressure}
          icon={weather?.icon}
          cloud={weather?.cloud}
          />

          <WeatherFuture temperature={forecast1?.temp_c} icon={forecast1?.icon} date={forecast1?.date} />
          <WeatherFuture temperature={forecast2?.temp_c} icon={forecast2?.icon} date={forecast2?.date} />
          <WeatherFuture temperature={forecast3?.temp_c} icon={forecast3?.icon} date={forecast3?.date} />

        </div>

      </div>
      <div>
      
    </div>
    </>
  )
}
