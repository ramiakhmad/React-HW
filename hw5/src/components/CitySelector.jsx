// src/components/CitySelector.js

const CitySelector = ({ cities, onSelectCity }) => {
  return (
    <div>
      <select onChange={(e) => onSelectCity(e.target.value)}>
        <option value="">Выберите город</option>
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
