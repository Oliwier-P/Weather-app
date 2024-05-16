export default function WeatherDays() {
  const days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <>
      <div className="weather-days">
        <div className="city-data">
          <span className="city">Warsaw, Poland</span>
          <span className="day">Monday 13 May</span>
        </div>

        <div className="current-data">
          <span className="temperature">25°C</span>
          <span className="description">Sunny</span>
          <div className="current-image"></div>
        </div>

        <div className="future-data">
          {days.map((day) => {
            return (
              <div className="future-day" key={day}>
                <span className="future-day-text">{day}</span>
                <span className="future-temperature">25°C</span>
                <div className="future-image"></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
