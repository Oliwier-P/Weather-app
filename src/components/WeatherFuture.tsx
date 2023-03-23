import React from 'react'

interface WeatherFutureProps {
    temperature: number | undefined,
    icon: string | undefined,
    date: string
}

export default function WeatherFuture({temperature,icon,date}: WeatherFutureProps) {

  const data = new Date(date);

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  return (
    <>
        <div className='weather-future'>
            {weekday[data.getDay()]}<br />
            {temperature}°C
            <img src={icon} />
        </div>
    </>
  )
}
