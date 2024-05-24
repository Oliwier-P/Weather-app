import styled from "@emotion/styled";
import { useEffect } from "react";

interface PressureProps {
  pressure: number;
}

export default function Pressure({ pressure }: PressureProps) {
  const GaugeValue = (value: number) => {
    // to make better fill effect
    if (value <= 1000) {
      const rotate = value * 0.00025;
      document.getElementById("fill")!.style.transform = `rotate(${rotate}turn)`;
    }
    if (value > 1000 && value <= 1100) {
      const rotate = 0.0025 * (value - 1051) + 0.375;
      document.getElementById("fill")!.style.transform = `rotate(${rotate}turn)`;
    }

    document.getElementById("cover")!.textContent = `${value} hPa`;
  };

  useEffect(() => {
    GaugeValue(pressure);
  }, [pressure]);

  return (
    <>
      <div className="box">
        <span className="box-title">Pressure</span>
        <div className="box-gauge">
          <div className="gauge-body">
            <div id="fill" className="gauge-fill"></div>
            <div id="cover" className="gauge-cover"></div>
          </div>
        </div>
      </div>
    </>
  );
}
