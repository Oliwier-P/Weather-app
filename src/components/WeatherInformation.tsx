import CloudCover from "./WeatherData/CloudBox";
import Humidity from "./WeatherData/Humidity";
import IndexUV from "./WeatherData/IndexUV";
import PerceivedBox from "./WeatherData/PerceivedBox";
import Precipitation from "./WeatherData/Precipitation";
import Pressure from "./WeatherData/Pressure";
import VisibilityBox from "./WeatherData/VisibilityBox";
import WindSpeed from "./WeatherData/WindSpeed";
import { currentWeather } from "../Types";

interface WeatherInformationProps {
  weather?: currentWeather;
}

export default function WeatherInformation({ weather }: WeatherInformationProps) {
  return (
    <>
      <div className="weather-information">
        <PerceivedBox feelslike={weather!.in_celcius ? weather!.feelslike_c : weather!.feelslike_f} />
        <Pressure pressure={weather!.pressure} />
        <IndexUV uv={weather!.uv} />
        <Humidity humidity={weather!.humidity} />
        <WindSpeed windSpeed={weather!.wind_kph} />
        <Precipitation precipitation={weather!.precip_mm} />
        <CloudCover cloudCover={weather!.cloud} />
        <VisibilityBox visibility={weather!.visibility} />
      </div>
    </>
  );
}
