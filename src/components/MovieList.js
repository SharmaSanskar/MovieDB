import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, openInfo }) => {
  return (
    <div className="grid grid-cols-auto gap-5">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} openInfo={openInfo} />
      ))}
    </div>
  );
};

export default MovieList;
