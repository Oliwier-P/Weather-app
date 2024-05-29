interface HumidityProps {
  humidity: number;
}

export default function Humidity({ humidity }: HumidityProps) {
  return (
    <>
      <div className="box">
        <span className="box-title">Humidity</span>
        <span className="box-data">{humidity}%</span>
        <span className="box-styled-data"></span>
      </div>
    </>
  );
}
