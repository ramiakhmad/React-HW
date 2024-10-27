// src/components/CityCard.js

const CityCard = ({ city }) => {
  if (!city) return null;

  return (
    <div>
      <h2>{city.name}</h2>
      <img
        src={city.imageUrl}
        alt={city.name}
        style={{ width: "100%", height: "auto" }}
      />
      <p>{city.description}</p>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityCard;
