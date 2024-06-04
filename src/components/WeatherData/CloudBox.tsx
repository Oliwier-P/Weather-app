interface CloudBoxProps {
  cloudCover: number;
}

export default function CloudCover({ cloudCover }: CloudBoxProps) {
  return (
    <>
      <div className="box">
        <span className="box-title">Cloud cover</span>
        <span className="box-data">{cloudCover}%</span>
        <span className="box-styled-data"></span>
      </div>
    </>
  );
}
