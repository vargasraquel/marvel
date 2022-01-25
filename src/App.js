import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Select from "./components/Select";

import "./css/main.scss";

function App() {
  const [characters, setCharacters] = useState([]);
  const [sortType, setSortType] = useState("characters");

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  }, []);

  // eslint-disable-next-line array-callback-return
  const marvelCharacter = characters.filter((character) => {
    if (
      character.biography.publisher === "Marvel Comics" &&
      character.appearance.gender === "Female"
    ) {
      return character;
    }
  });

  const [characterList, setCharacterList] = useState(marvelCharacter);

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        intelligence: "intelligence",
        strength: "strength",
        speed: "speed",
        power: "power",
      };
      const sortProperty = types[type];
      const sorted = [...marvelCharacter].sort((a, b) => {
        return b.powerstats[sortProperty] - a.powerstats[sortProperty];
      });

      setCharacterList(sorted);
    };

    sortArray(sortType);
  }, [...marvelCharacter, sortType]);

  return (
    <div className="container">
      <h1>Marvel female characters</h1>

      <Select setSortType={setSortType} />

      <Cards characterList={characterList} />
    </div>
  );
}

export default App;
