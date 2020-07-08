import React from "react";

const MovieInfo = ({ selected, closeInfo }) => {
  return (
    <div className="w-screen h-screen bg-gray-900 text-white">
      <img src={selected.Poster} alt="" />
      <h1>
        {selected.Title}
      </h1>
      <h2>{selected.Runtime}</h2>
      <p>{selected.Plot}</p>
      <p>{selected.imdbRating}</p>
      <button onClick={closeInfo}>Close</button>
    </div>
  );
};

export default MovieInfo;
