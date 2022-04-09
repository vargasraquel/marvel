import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Select from "./components/Select";

import "./css/main.scss";

function App() {
  const [characters, setCharacters] = useState([]);
  const [sortType, setSortType] = useState(characters);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((response) => response.json())
      .then((data) =>
        setCharacters(
          data.filter((character) => {
            if (
              character.biography.publisher === "Marvel Comics" &&
              character.appearance.gender === "Female"
            ) {
              return character;
            }
            return 0;
          })
        )
      );
  }, []);

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  return (
    <div className="container">
      <h1>Marvel female characters</h1>

      <Select setSortType={setSortType} />

      <Cards characters={characters} />
    </div>
  );
}

export default App;
