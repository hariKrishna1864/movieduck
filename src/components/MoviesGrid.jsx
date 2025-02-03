import { useState } from "react";
import "../App.css";
import MovieCard from "./MovieCard";

function MoviesGrid({ movies, watchList, toggleWatchlist }) {
  let [search, setSearch] = useState("");
  let [genre, setgenre] = useState("All");
  let [rating, setrating] = useState("All");

  let handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  let handleGenreChange = (e) => {
    setgenre(e.target.value);
  };
  let handleRatingChange = (e) => {
    setrating(e.target.value);
  };

  let genreChangeMovies = (genre, movie) => {
    return genre === "All" || genre.toLowerCase() === movie.genre.toLowerCase();
  };
  let ratingchangeMovies = (rating, movie) => {
    if (rating == "All") return true;
    if (rating == "good") return movie.rating > 8;
    if (rating == "okay") return movie.rating > 5 && movie.rating < 8;
    if (rating == "bad") return movie.rating < 5;
  };
  let filterchangeMovies = (movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  };

  let filteredMovies = movies.filter((movie) => {
    return (
      genreChangeMovies(genre, movie) &&
      ratingchangeMovies(rating, movie) &&
      filterchangeMovies(movie)
    );
  });

  return (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Search for movies ..."
        value={search}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label htmlFor=""> Genre</label>
          <select
            name=""
            id=""
            className="filter-dropdown"
            onChange={handleGenreChange}
            value={genre}
          >
            <option value="All">All Movies</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="action">Action</option>
          </select>
        </div>
        <div className="filter-slot">
          <label htmlFor=""> Rating</label>
          <select
            name=""
            id=""
            className="filter-dropdown"
            onChange={handleRatingChange}
            value={rating}
          >
            <option value="All">All Movies</option>
            <option value="good">Good</option>
            <option value="okay">Okay</option>
            <option value="bad">Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchlist={toggleWatchlist}
            isWatchlisted={watchList.includes(movie.id)}
          />
        ))}
      </div>
    </>
  );
}

export default MoviesGrid;
