interface PerceivedBoxProps {
  feelslike: number;
}

export default function PerceivedBox({ feelslike }: PerceivedBoxProps) {
  return (
    <>
      <div className="box">
        <span className="box-title">Perceived</span>
        <span className="box-data">{feelslike}°C</span>
        <div className="box-styled-data-perceived">
          <div></div>
        </div>
      </div>
    </>
  );
}
