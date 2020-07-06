import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Home from './components/Home';

function App() {
  const [movies, setMovies] = useState([]);
  const [isFound, setIsFound] = useState(false);
  const [query, setQuery] = useState('');
  const [showHome, setShowHome] = useState(true);

  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        const search = data.Search;
        console.log(search);
        if (search === undefined) {
          setIsFound(false);
        } else {
          setIsFound(true);
          setMovies(search);
        }
      })
      .catch((err) => console.log(err));

    if (query === '') {
      setShowHome(true);
    } else {
      setShowHome(false);
    }
  }, [query]);

  return (
    <div>
      <Header getMovie={(q) => setQuery(q)} />
      {isFound ? <MovieList movies={movies} /> : <Home showHome={showHome} />}
    </div>
  );
}

export default App;
