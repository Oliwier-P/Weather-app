import { AreaChart, CartesianGrid, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { upcomingHours } from "../Types";

interface WeatherChartProps {
  in_celcius: boolean;
  hourlyData: upcomingHours[];
}

export default function WeatherTemperature({ in_celcius, hourlyData }: WeatherChartProps) {
  const min = Math.min(...hourlyData.map((hour) => (in_celcius ? hour.temp_c : hour.temp_f)));
  const max = Math.max(...hourlyData.map((hour) => (in_celcius ? hour.temp_c : hour.temp_f)));

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
      <YAxis domain={[min - 3, max + 3]} allowDataOverflow={true} hide={true} />
      <XAxis xAxisId={0} dataKey={`${in_celcius ? "temp_c" : "temp_f"}`} strokeOpacity={0} orientation="top" />
      <XAxis xAxisId={1} dataKey="time" strokeOpacity={0} orientation="bottom" />
      <Area type="linear" dataKey="temp" stroke="#2180e1" fill="#2180e1" />
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
