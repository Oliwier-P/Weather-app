import './App.css'
import { useEffect, useState } from 'react'; 
import { currentWeather } from './Types';
import CityBox from './components/CityBox';

export default function App() {

  const [weather, setWeather] = useState<currentWeather>();
  const [city, setCity] = useState("Slupsk");

  const FetchData = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=c890eee18037494394e111328230903&q=${city}&aqi=no`)
    .then((respond) => respond.json())
    .then((data) => setWeather(
      {
        temp_c: Math.round(data.current.temp_c),
        wind_kph: data.current.wind_kph,
        humidity: data.current.humidity,
        uv: data.current.uv,
        precip_mm: data.current.precip_mm,
        icon: data.current.condition.icon
      }
    ));
  }

  useEffect(() => {
    FetchData();
  }, []);
  

  return (
    <>

      <div className='main-container' >

        <div className='fav-cities' >
          <input type="text" className='fav-cities-inpt' />
          <CityBox name={city} temp={weather?.temp_c} icon={weather?.icon} />
        </div>
        
        <div className='weather-div' >
          <ul>
            {city} Today:
            <li>Temperature - {weather?.temp_c}</li>
            <li>Wind_kph - {weather?.wind_kph}</li>
            <li>Humidity - {weather?.humidity}</li>
            <li>UV - {weather?.uv}</li>
            <li>Precip_mm - {weather?.precip_mm}</li>
            <li>Icon - </li>
            <img src={weather?.icon} />
          </ul>
          
          

        </div>

      </div>
      <div>
      
    </div>
    </>
  )
}
