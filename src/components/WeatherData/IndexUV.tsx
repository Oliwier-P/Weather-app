interface IndexUVProps {
  uv: number;
}

export default function IndexUV({ uv }: IndexUVProps) {
  return (
    <>
      <div className="box">
        <span className="box-title">Index UV</span>
        <div className="box-styled-data-uv">
          <div className="data-uv">
            <span className="data-uv-number">{uv}</span>
            <span className="data-uv-text">Low</span>
          </div>
          <div className="styled-data-uv">
            <div className="bar" style={{ height: `${uv * 10}%` }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
