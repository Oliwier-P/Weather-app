import './App.css'
import { useEffect, useState } from 'react'; 
import { currentWeather, forecastWeather } from './Types';
import CityBox from './components/CityBox';
import WeatherNow from './components/WeatherNow';
import WeatherFuture from './components/WeatherFuture';
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function App() {

  const [weather, setWeather] = useState<currentWeather>();
  const [forecast1, setForecast1] = useState<forecastWeather>();
  const [forecast2, setForecast2] = useState<forecastWeather>();
  const [forecast3, setForecast3] = useState<forecastWeather>();

  const [city, setCity] = useState("Slupsk");

  const [value, setValue] = useState<string | null>();
  const [inputValue, setInputValue] = useState<string>('');

  const city_list = [ "Slupsk", "Tokyo", "New York","End City" ];

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
          icon: data.current.condition.icon
        }
      ),
      setForecast1(
        {
          temp_c: Math.round(data.forecast.forecastday[1].day.avgtemp_c),
          icon: data.forecast.forecastday[1].day.condition.icon
        }
      ),
      setForecast2(
        {
          temp_c: Math.round(data.forecast.forecastday[2].day.avgtemp_c),
          icon: data.forecast.forecastday[2].day.condition.icon
        }
      ),
      setForecast3(
        {
          temp_c: Math.round(data.forecast.forecastday[3].day.avgtemp_c),
          icon: data.forecast.forecastday[3].day.condition.icon
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

          <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
          <div>{`inputValue: '${inputValue}'`}</div>
          <br />
          <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {setValue(newValue)}}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {setInputValue(newInputValue)}}
            id="controllable-states-demo"
            options={city_list}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="City" />}
          />
          <CityBox name={city} temp={weather?.temp_c} icon={weather?.icon} />
        </div>

        <div className='weather-div wrap-flex' >
          {value}
          <WeatherNow 
          temperature={weather?.temp_c} 
          wind={weather?.wind_kph} 
          humidity={weather?.humidity}
          uv={weather?.uv}  
          precip={weather?.precip_mm}
          pressure={weather?.pressure}
          icon={weather?.icon}
          />

          <WeatherFuture temperature={forecast1?.temp_c} icon={forecast1?.icon} />
          <WeatherFuture temperature={forecast2?.temp_c} icon={forecast2?.icon} />
          <WeatherFuture temperature={forecast3?.temp_c} icon={forecast3?.icon} />

        </div>

      </div>
      <div>
      
    </div>
    </>
  )
}
