export default function Cards({ characters }) {
  return (
    <div className="cards">
      {characters.map((character) => (
        <div className="card" key={character.id}>
          <h2>{character.name}</h2>
          <div className="info">
            <img src={character.images.sm} alt={character.name} />
          </div>
          <div className="stats">
            <p>
              <strong>Intelligence:</strong>
              {character.powerstats.intelligence}
            </p>
            <p>
              <strong>Strength:</strong> {character.powerstats.strength}
            </p>
            <p>
              <strong>Speed:</strong> {character.powerstats.speed}
            </p>
            <p>
              <strong>Power: </strong> {character.powerstats.power}
            </p>
          </div>
          <p className="occupation">{character.work.occupation}</p>
        </div>
      ))}
    </div>
  );
}
