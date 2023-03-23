type currentWeather = {
    temp_c: number,
    wind_kph: number,
    humidity: number,
    uv: number,
    precip_mm: number,
    pressure: number
    icon: string,
    cloud: number
} 

type forecastWeather = {
    temp_c: number,
    icon: string,
    date: string
}

export type {currentWeather, forecastWeather};