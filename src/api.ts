import { format } from "date-fns";
import { currentWeatherType, forecastWeatherType, upcomingHoursType, cityType, fetchDataResponseType } from "./Types";

export const FetchData = async (latitude: string, longitude: string): Promise<fetchDataResponseType> => {
  const url = `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${latitude}/${longitude}&units=metric`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const newCity: cityType = {
      name: result.city.name,
      country: result.city.country,
      lat: result.city.coord.lat.toString(),
      lng: result.city.coord.lon.toString(),
    };

    const newWeather: currentWeatherType = {
      temp_c: parseInt(result.list[0].main.temp.toFixed(2)),
      temp_f: parseInt((result.list[0].main.temp * 1.8 + 32).toFixed(2)),
      icon: result.list[0].weather[0].icon,
      description: result.list[0].weather[0].description,
      feelslike_c: parseInt(result.list[0].main.feels_like.toFixed(2)),
      feelslike_f: parseInt((result.list[0].main.feels_like * 1.8 + 32).toFixed(2)),
      pressure: result.list[0].main.pressure,
      uv: 2,
      precip_mm: result.list[0].rain ? result.list[0].rain["3h"] : 0,
      wind_kph: Math.round(result.list[0].wind.speed),
      humidity: result.list[0].main.humidity,
      cloud: result.list[0].clouds.all,
      visibility: result.list[0].visibility / 1000,
      in_celcius: true,
      date: format(new Date(), "eeee, MMMM do"),
    };

    const newHourly: upcomingHoursType[] = result.list.slice(0, 10).map((item: any) => {
      return {
        time: format(item.dt_txt, "HH:mm"),
        temp_c: parseInt(item.main.temp.toFixed(2)),
        temp_f: parseInt((item.main.temp * 1.8 + 32).toFixed(2)),
      };
    });

    const newForecastArray = result.list.slice(1).filter((res: any) => format(new Date(res.dt_txt), "HH") === format(new Date(result.list[0].dt_txt), "HH"));

    if (newForecastArray.length == 4) {
      newForecastArray.push(result.list[result.list.length - 1]);
    }

    const newForecast: forecastWeatherType[] = newForecastArray.map((res: any) => ({
      date_day: format(new Date(res.dt_txt), "EEEE"),
      temp_c: Math.round(res.main.temp),
      temp_f: Math.round(res.main.temp * 1.8 + 32),
      icon: res.weather[0].icon,
    }));

    return { newCity, newWeather, newHourly, newForecast };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
