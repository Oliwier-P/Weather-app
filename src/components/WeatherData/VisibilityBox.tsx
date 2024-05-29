interface VisibilityBoxProps {
  visibility: number;
}

export default function VisibilityBox({ visibility }: VisibilityBoxProps) {
  return (
    <>
      <div className="box">
        <span className="box-title">Visibility</span>
        <span className="box-data">{visibility} km</span>
        <span className="box-styled-data"></span>
      </div>
    </>
  );
}
