import { useState, useEffect, useCallback } from "react";
import Cards from "./components/Cards";
import Select from "./components/Select";

import "./css/main.scss";

function App() {
  const [characters, setCharacters] = useState([]);
  const [sortType, setSortType] = useState(characters);

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

  const sortWomen = useCallback(
    (event) => {
      setSortType(event.target.value);

      const sortArray = (type) => {
        const types = {
          intelligence: "intelligence",
          strength: "strength",
          speed: "speed",
          power: "power",
        };
        const sortProperty = types[type];

        const sorted = [...characters].sort((a, b) => {
          return b.powerstats[sortProperty] - a.powerstats[sortProperty];
        });

        setCharacters(sorted);
      };

      sortArray(sortType);
    },
    [characters, sortType]
  );

  return (
    <div className="container">
      <h1>Marvel female characters</h1>

      <Select sortWomen={sortWomen} />

      <Cards characters={characters} />
    </div>
  );
}

export default App;
