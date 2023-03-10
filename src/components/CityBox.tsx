interface CityBoxProps {
    name: string | undefined,
    temp: number | undefined,
    icon: string | undefined
}

export default function CityBox({name,temp,icon}: CityBoxProps) {
  return (
    <>
        <div className='city-box'>
            <span>{name}</span>
            <span>{temp}</span>
            <img src={icon} />
        </div>
    </>
  )
}
