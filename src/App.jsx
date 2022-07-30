import { useState, useEffect, useCallback} from "react";
import Cards from "./components/Cards";
import Select from "./components/Select";

import "./css/main.scss";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((response) => response.json())
      .then((data) => {
        const result = data.filter((character) => {
          if (
            character.biography.publisher === "Marvel Comics" &&
            character.appearance.gender === "Female"
          ) {
            return character;
          }
          return 0;
        });
        setCharacters(result);
      });
  }, []);

  const sortArray = useCallback((type) => {
    const types = {
      intelligence: "intelligence",
      strength: "strength",
      speed: "speed",
      power: "power",
    };

    const sortProperty = types[type];

    const sorted = [...characters].sort(
      (a, b) => b.powerstats[sortProperty] - a.powerstats[sortProperty]
    );
    setCharacters(sorted);
  }, [characters]);

  return (
    <div className="container">
      <h1>Marvel female characters</h1>

      <Select
        onChange={(event) => sortArray(event.target.value)}
      />

      <Cards characters={characters} />
    </div>
  );
}

export default App;
