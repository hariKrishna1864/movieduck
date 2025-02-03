import PropTypes from "prop-types";

function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  let handleImage = (e) => {
    e.target.src = "images/default.jpg";
  };

  let addClassForRating = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating > 5 && rating < 8) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`/images/${movie.image}`}
        alt={movie.title}
        onError={handleImage}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span
            className={` movie-card-rating  ${addClassForRating(movie.rating)}`}
          >
            {movie.rating}
          </span>
          <span className="movie-card-genre">{movie.genre}</span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          />

          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "in Watchlist" : "add to watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
    id: PropTypes.number,
  }),
  isWatchlisted: PropTypes.bool.isRequired,
  toggleWatchlist: PropTypes.func.isRequired,
};

export default MovieCard;
