import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  let [movies, setMovies] = useState([]);
  let [watchList, setWatchlist] = useState([]);

  let toggleWatchlist = (movieid) => {
    setWatchlist((prev) =>
      prev.includes(movieid)
        ? prev.filter((id) => id !== movieid)
        : [...prev, movieid]
    );
  };
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <div className="App">
        <div className="container">
          <Header />
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/watchlist">Watchlist</Link>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route
                path="/"
                element={
                  <MovieGrid
                    movies={movies}
                    watchList={watchList}
                    toggleWatchlist={toggleWatchlist}
                  />
                }
              ></Route>
              <Route
                path="/watchlist"
                element={
                  <Watchlist
                    movies={movies}
                    watchList={watchList}
                    toggleWatchlist={toggleWatchlist}
                  />
                }
              ></Route>
            </Routes>
          </Router>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
