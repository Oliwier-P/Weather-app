export default function Precipitation() {
  const bars = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <>
      <div className="box">
        <span className="box-title">Precipitation</span>
        <span className="box-data">0 cm</span>
        <div className="box-styled-data-precip">
          {bars.map((bar, index) => (
            <div className="box-styled-data-precip-bar"></div>
          ))}
        </div>
      </div>
    </>
  );
}
