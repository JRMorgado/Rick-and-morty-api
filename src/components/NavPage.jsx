export function NavPage({ page, setPage }) {
  return (
    <div className="flex justify-between p-12 md:px-24 m-auto">
      <button
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
        className="bg-green-300 px-2 py-1 rounded-xl text-black font-semibold transition duration-75 hover:scale-105 cursor-pointer block disabled:opacity-80 disabled:cursor-not-allowed"
      >
        Page {page - 1}
      </button>
      <header>Page: {page}</header>
      <button
        onClick={() => setPage(page + 1)}
        className="bg-green-300 px-2 py-1 rounded-xl text-black font-semibold transition duration-75 hover:scale-105 cursor-pointer block"
      >
        Page {page + 1}
      </button>
    </div>
  );
}

export default NavPage;
