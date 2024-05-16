import { AreaChart, Line, CartesianGrid, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

export default function WeatherTemperature() {
  const data = [
    { name: "10:00", temp: 24 },
    { name: "11:00", temp: 25 },
    { name: "12:00", temp: 24 },
    { name: "13:00", temp: 24 },
    { name: "14:00", temp: 23 },
    { name: "15:00", temp: 25 },
    { name: "16:00", temp: 26 },
    { name: "17:00", temp: 25 },
    { name: "18:00", temp: 25 },
    { name: "19:00", temp: 23 },
  ];

  const renderAreaChart = (
    <AreaChart
      width={1100}
      height={200}
      data={data}
      margin={{
        top: 0,
        right: 50,
        left: 50,
        bottom: 0,
      }}
    >
      <CartesianGrid stroke="#ACACAC" horizontal={false} height={180} />
      <YAxis domain={[21, 28]} allowDataOverflow={true} hide={true} />
      <XAxis xAxisId={0} dataKey="temp" strokeOpacity={0} orientation="top" />
      <XAxis xAxisId={1} dataKey="name" strokeOpacity={0} orientation="bottom" />
      <Area type="linear" dataKey="temp" stroke="#2180e1" fill="#2180e1" />
    </AreaChart>
  );

  return (
    <>
      <div className="chart">
        <div className="chart-text-and-filter">
          <span className="chart-text">Upcoming hours</span>
          <div className="chart-filter">Temperature</div>
        </div>
        <ResponsiveContainer width="100%" height="60%">
          {renderAreaChart}
        </ResponsiveContainer>
      </div>
    </>
  );
}
