import CharacterList from "./components/characterList";

function App() {
  return (
    <>
      <main className="p-5 lg:p-32 m-auto">
        <h1 className="text-green-400 text-center">Rick & Morty</h1>

        <CharacterList />
      </main>
    </>
  );
}

export default App;
