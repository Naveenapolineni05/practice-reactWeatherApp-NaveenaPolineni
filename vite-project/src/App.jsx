import { useState } from "react";
import CityList from "./components/cityList.jsx";
import CityForecast from "./components/cityForecast.jsx";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <div className="app-container">
      <h1>🌤️ React Weather App</h1>
      {!selectedCity ? (
        <CityList onCitySelect={setSelectedCity} />
      ) : (
        <CityForecast city={selectedCity} onBack={() => setSelectedCity("")} />
      )}
    </div>
  );
}

export default App;
