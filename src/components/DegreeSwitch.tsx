interface DegreeSwitchProps {
  onChange: (checked: boolean) => void;
}

export default function DegreeSwitch({ onChange }: DegreeSwitchProps) {
  return (
    <>
      <div className="switch-container">
        <span className="degree">°C</span>

        <input
          className="degree-switch"
          type="checkbox"
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        />

        <span className="degree">°F</span>
      </div>
    </>
  );
}
