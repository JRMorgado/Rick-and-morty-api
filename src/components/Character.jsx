function Character({ character }) {
  return (
    <>
      <div className="rounded-lg bg-slate-700 transition duration-300 hover:scale-105 cursor-pointer w-full hover:border-4  hover:border-amber-500">
        <img
          className="rounded-t-lg w-full hover:rounded-none"
          src={character.image}
          loading="lazy"
          alt={`image extracted on rick and morty api`}
        />
        <div className="p-3">
          <h2
            className="font-bold mb-5 text-lg truncate"
            title={character.name}
          >
            {character.name}
          </h2>
          <p className="flex flex-row items-center">
            <span
              className={`w-4 h-4 rounded-full inline-block mr-2 ${
                character.status === "Alive" ? "bg-green-300" : "bg-red-300"
              }`}
            ></span>
            {character.status} - {character.species}
          </p>
          <p className="mb-2">{character.gender}</p>
          <p className="mb-2">{character.origin.name}</p>
        </div>
      </div>
    </>
  );
}

export default Character;
