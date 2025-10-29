function CityList({ onCitySelect }) {
  const cities = ["New York", "London", "Tokyo"];

  return (
    <div className="city-list">
      <h2>Select a City</h2>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <button onClick={() => onCitySelect(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;
