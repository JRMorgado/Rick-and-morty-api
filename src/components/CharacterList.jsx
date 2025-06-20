import Character from "./character";
import { useState, useEffect } from "react";
import NavPage from "./NavPage";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <>
      <NavPage page={page} setPage={setPage} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6 p-12 md:p-24 m-auto">
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
      <NavPage page={page} setPage={setPage} />
    </>
  );
}

export default CharacterList;
