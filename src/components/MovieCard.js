import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <img src={movie.Poster} alt='' />
      <h1>{movie.Title}</h1>
      <h3>{movie.Year}</h3>
    </div>
  );
};

export default MovieCard;
