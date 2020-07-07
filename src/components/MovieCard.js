import React from "react";

const MovieCard = ({ movie }) => {
  const string = movie.Type;
  const type = string.charAt(0).toUpperCase() +
    string.slice(1);
  return (
    <div
      className="w-64 mx-auto rounded-lg overflow-hidden shadow-2xl cursor-pointer relative"
    >
      <img
        className="w-full max-h-custom"
        src={movie.Poster}
        alt={movie.Title}
      />

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
