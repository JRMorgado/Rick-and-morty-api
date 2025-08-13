import Character from "./character";
import { useState } from "react";
import NavPage from "./NavPage";
import { useRickAndMortyApi } from "../hooks/useRickAndMortyApi";

function CharacterList() {
  const [page, setPage] = useState(1);
  const { characters } = useRickAndMortyApi({ page: page });

  const updatePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <NavPage page={page} updatePage={updatePage} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-12 md:p-24 m-auto">
        {characters.map((character) => {
          return <Character key={character.id} character={character} />;
        })}
      </div>
      {/* <NavPage page={page} setPage={setPage} /> */}
      <NavPage page={page} updatePage={updatePage} />
    </>
  );
}

export default CharacterList;
