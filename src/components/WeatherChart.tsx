import { AreaChart, CartesianGrid, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { upcomingHoursType } from "../Types";
import { useEffect, useState } from "react";
import { set } from "date-fns";

interface WeatherChartProps {
  in_celcius: boolean;
  hourlyData: upcomingHoursType[];
}

export default function WeatherTemperature({ in_celcius, hourlyData }: WeatherChartProps) {
  const [minTemp, setMinTemp] = useState<number>();
  const [maxTemp, setMaxTemp] = useState<number>();

  useEffect(() => {
    const min = Math.min(...hourlyData.map((hour) => (in_celcius ? hour.temp_c : hour.temp_f)));
    const max = Math.max(...hourlyData.map((hour) => (in_celcius ? hour.temp_c : hour.temp_f)));

    setMinTemp(min);
    setMaxTemp(max);
  }, [hourlyData, in_celcius]);

  const renderAreaChart = (
    <AreaChart
      width={1100}
      height={200}
      data={hourlyData}
      margin={{
        top: 0,
        right: 50,
        left: 50,
        bottom: 0,
      }}
    >
      <CartesianGrid className="chart-grid" stroke="#ACACAC" horizontal={false} />
      <YAxis domain={[minTemp! - 3, maxTemp! + 3]} allowDataOverflow={true} hide={true} />
      <XAxis xAxisId={0} dataKey={`${in_celcius ? "temp_c" : "temp_f"}`} strokeOpacity={0} orientation="top" />
      <XAxis xAxisId={1} dataKey="time" strokeOpacity={0} orientation="bottom" />
      <Area type="linear" dataKey={`${in_celcius ? "temp_c" : "temp_f"}`} stroke="#111111" fill="#111111" />
    </AreaChart>
  );

  return (
    <>
      <div className="chart">
        <div className="chart-text-and-filter">
          <span className="chart-text">Upcoming hours</span>
        </div>
        <ResponsiveContainer width="100%" height="60%">
          {renderAreaChart}
        </ResponsiveContainer>
      </div>
    </>
  );
}
