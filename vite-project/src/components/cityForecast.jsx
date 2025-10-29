import { useEffect, useRef, useState } from "react";

const weatherData = {
  "New York": {
    summary: "☀️ Sunny, 25°C",
    details: "Clear skies throughout the day with mild temperatures.",
  },
  "London": {
    summary: "☁️ Cloudy, 18°C",
    details: "Overcast with occasional light rain in the afternoon.",
  },
  "Tokyo": {
    summary: "🌧️ Rainy, 22°C",
    details: "Continuous rain expected throughout the day.",
  },
};

function CityForecast({ city, onBack }) {
  const [forecast, setForecast] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    // Simulate fetching weather data
    const timer = setTimeout(() => {
      setForecast(weatherData[city] || null);
    }, 800);

    return () => clearTimeout(timer);
  }, [city]);

  const handleScroll = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!forecast) {
    return (
      <div className="forecast">
        <p>Loading forecast for {city}...</p>
      </div>
    );
  }

  return (
    <div className="forecast">
      <h2>Weather in {city}</h2>
      <p>{forecast.summary}</p>
      <button onClick={handleScroll}>View Details</button>

      <div ref={detailsRef} className="forecast-details">
        <h3>Details</h3>
        <p>{forecast.details}</p>
      </div>

      <button className="back-btn" onClick={onBack}>
        ⬅️ Back to Cities
      </button>
    </div>
  );
}

export default CityForecast;
