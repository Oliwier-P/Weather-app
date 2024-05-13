export default function DegreeSwitch() {
  return (
    <>
      <span className="degree">°C</span>
      <label className="degree-switch">
        <input type="checkbox" />
        <span className="degree-slider" />
      </label>
      <span className="degree">°F</span>
    </>
  );
}
