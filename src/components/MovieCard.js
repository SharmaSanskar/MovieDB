import React from "react";

const MovieCard = ({ movie, openInfo }) => {
  const string = movie.Type;
  const type = string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div
      onClick={() => openInfo(movie.imdbID)}
      className="w-64 mx-auto rounded-lg overflow-hidden shadow-2xl cursor-pointer relative"
    >
      {(movie.Poster === "N/A")
        ? <div
          className="w-full h-custom bg-gray-900 text-2xl text-gray-700 font-bold flex flex-col items-center justify-center"
        >
          <p>No</p>
          <p>Poster</p>
          <p>Available</p>
        </div>
        : <img
          className="w-full h-custom"
          src={movie.Poster}
          alt={movie.Title}
        />}

      <div
        className="px-5 py-2 bg-gray-200 h-full"
      >
        <h1 className="font-bold text-gray-900 text-xl">
          {movie.Title}
        </h1>
        <p className="font-semibold text-gray-700 text-base">{type}</p>
        <p className="text-gray-700 text-base">{movie.Year}</p>
      </div>

      <div
        className="absolute opacity-0 w-full text-center pt-32 h-full text-white font-bold text-3xl hover:opacity-100 hover:bg-opacity-50 bg-black transition ease-in-out duration-700"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        More info
      </div>
    </div>
  );
};

export default MovieCard;
