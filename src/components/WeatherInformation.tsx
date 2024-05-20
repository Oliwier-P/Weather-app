import CloudCover from "./CloudBox";
import Humidity from "./Humidity";
import IndexUV from "./IndexUV";
import PerceivedBox from "./PerceivedBox";
import Precipitation from "./Precipitation";
import Pressure from "./Pressure";
import VisibilityBox from "./VisibilityBox";
import WindSpeed from "./WindSpeed";

export default function WeatherInformation() {
  return (
    <>
      <div className="weather-information">
        <PerceivedBox />
        <Pressure />
        <IndexUV />
        <Precipitation />
        <WindSpeed />
        <Humidity />
        <CloudCover />
        <VisibilityBox />
      </div>
    </>
  );
}
