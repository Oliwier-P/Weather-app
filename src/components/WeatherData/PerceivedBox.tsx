import { useEffect, useState, useRef } from "react";

interface PerceivedBoxProps {
  feelslike: number;
  in_celcius: boolean;
}

export default function PerceivedBox({ feelslike, in_celcius }: PerceivedBoxProps) {
  const fillWidth = useRef(0);
  const spaceWidth = useRef(0);
  const flipped = useRef(1);
  const [barStyle, setBarStyle] = useState({});

  useEffect(() => {
    const degreeValue = in_celcius ? 0 : 32;
    const perceived = in_celcius ? feelslike : feelslike * 1.8 + 32;

    if (perceived == degreeValue) {
      fillWidth.current = 1;
      flipped.current = 1;
    }
    if (perceived < degreeValue) {
      fillWidth.current = perceived * -1;

      const space = 50 - perceived * -1;
      spaceWidth.current = space;

      flipped.current = -1;
    }
    if (perceived > degreeValue) {
      fillWidth.current = perceived;
      spaceWidth.current = 50;
      flipped.current = 1;
    }

    setBarStyle(() => {
      return {
        left: `${spaceWidth.current}%`,
        width: `${fillWidth.current}%`,
        transform: `scaleX(${flipped.current})`,
      };
    });
  }, [feelslike]);

  return (
    <>
      <div className="box">
        <span className="box-title">Perceived</span>
        <span className="box-data">
          {in_celcius ? feelslike : feelslike * 1.8 + 32}
          {in_celcius ? "°C" : "°F"}
        </span>
        <div className="box-styled-data-perceived">
          <div className="background-bar">
            <div className="fill-bar" style={barStyle}></div>
          </div>
          <div className="text-bar">
            <span>{in_celcius ? "-50" : "-58"}</span>
            <span>{in_celcius ? "0" : "32"}</span>
            <span>{in_celcius ? "50" : "122"}</span>
          </div>
        </div>
      </div>
    </>
  );
}
