import React from 'react'

interface WeatherNowProps{
    temperature: number | undefined,
    wind: number | undefined,
    humidity: number | undefined,
    uv: number | undefined,
    precip: number | undefined,
    pressure: number | undefined
    icon: string | undefined,
    cloud: number | undefined
}

export default function WeatherNow({temperature,wind,humidity,uv,precip,pressure,icon,cloud}: WeatherNowProps) {
  return (
    <>
        <div className='weather-now wrap-flex'>
            <div className='weather-data-temp'>
                <div className='w-d-t-1'>
                   {temperature}
                </div>
                <div className='w-d-t-2'>
                    <div>°C</div>
                    <div><img src={icon} className="pic-temp-now" /></div>
                </div>
                
            </div>
            <div className='weather-data wrap-flex'>
                <div>
                    Wind - {wind} km/h
                </div>
                <div>
                    Humidity - {humidity}%
                </div>
                <div>
                    UV - {uv}
                </div>
                <div>
                    Precip - {precip} mm
                </div>
                <div>
                    {pressure} hPa
                </div>
                <div>
                    cloud - {cloud}%
                </div>
            </div>
        </div>
    </>
  )
}
