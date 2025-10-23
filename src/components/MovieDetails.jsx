import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { id } = useParams(); // get the movie ID from URL
  const movie = movies.find((m) => m.id === parseInt(id));
  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={`/images/${movie.image}`} alt={movie.title} />
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Rating:</strong> {movie.rating}
      </p>
      <p>
        <strong>Description:</strong>{" "}
        {movie.description || "No description available."}
      </p>
    </div>
  );
}

export default MovieDetails;
