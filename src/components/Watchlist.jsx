import MovieCard from "./MovieCard";

function Watchlist({ movies, watchList, toggleWatchlist }) {
  return (
    <>
      <h1 className="title ">Your Watchlist</h1>
      <div className="watchlist">
        {watchList.map((id) => {
          const movie = movies.find((movie) => movie.id === id);

          return (
            <MovieCard
              key={id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={true}
            />
          );
        })}
      </div>
    </>
  );
}

export default Watchlist;
