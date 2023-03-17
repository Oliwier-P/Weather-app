type currentWeather = {
    temp_c: number,
    wind_kph: number,
    humidity: number,
    uv: number,
    precip_mm: number,
    pressure: number
    icon: string
} 

type forecastWeather = {
    temp_c: number,
    icon: string
}

export type {currentWeather, forecastWeather};