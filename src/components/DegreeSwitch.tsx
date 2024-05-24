export default function DegreeSwitch() {
  return (
    <>
      <div className="switch-container">
        <span className="degree">°C</span>

        <input className="degree-switch" type="checkbox" />

        <span className="degree">°F</span>
      </div>
    </>
  );
}
