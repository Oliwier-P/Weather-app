import CloudCover from "./WeatherData/CloudBox";
import Humidity from "./WeatherData/Humidity";
import IndexUV from "./WeatherData/IndexUV";
import PerceivedBox from "./WeatherData/PerceivedBox";
import Precipitation from "./WeatherData/Precipitation";
import Pressure from "./WeatherData/Pressure";
import VisibilityBox from "./WeatherData/VisibilityBox";
import WindSpeed from "./WeatherData/WindSpeed";

export default function WeatherInformation() {
  return (
    <>
      <div className="weather-information">
        <PerceivedBox />
        <Pressure pressure={1012} />
        <IndexUV />
        <Humidity />
        <WindSpeed />
        <Precipitation precipitation={3.4} />
        <CloudCover />
        <VisibilityBox />
      </div>
    </>
  );
}
