import { useEffect, useState } from "react";

const API_URL = "https://rickandmortyapi.com/api/character?page=";

export function useRickAndMortyApi({ page }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${API_URL}${page}`);
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return { characters };
}
