import React from 'react'

interface WeatherFutureProps {
    temperature: number | undefined,
    icon: string | undefined
}

export default function WeatherFuture({temperature,icon}: WeatherFutureProps) {
  return (
    <>
        <div className='weather-future'>
            31*C Ikona
        </div>
    </>
  )
}
