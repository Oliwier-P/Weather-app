interface WindSpeedProps {
  windSpeed: number;
}

export default function WindSpeed({ windSpeed }: WindSpeedProps) {
  return (
    <>
      <div className="box">
        <span className="box-title">Wind speed</span>
        <span className="box-data">{windSpeed}</span>
        <span className="box-styled-data"></span>
      </div>
    </>
  );
}
