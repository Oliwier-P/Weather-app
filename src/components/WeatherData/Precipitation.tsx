interface PrecipitationProps {
  precipitation: number;
}

export default function Precipitation({ precipitation }: PrecipitationProps) {
  const bars = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

  return (
    <>
      <div className="box">
        <span className="box-title">Precipitation</span>
        <span className="box-data">{precipitation} cm</span>
        <div className="box-styled-data-precip">
          {bars.map((bar, index) => (
            <div key={index} className={`box-styled-data-precip-bar ${bar <= precipitation * 10 ? "fill" : ""}`}>
              <span>{bar}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
