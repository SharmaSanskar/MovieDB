import React from "react";

const MovieInfo = ({ selected, closeInfo }) => {
  const imdbLink = `https://www.imdb.com/title/${selected.imdbID}/`;
  return (
    <div className="bg-gray-900 w-screen min-h-screen">
      <div
        className="container px-5 py-12 max-w-5xl mx-auto flex"
      >
        <div className="w-3/12">
          <img className="w-full h-full" src={selected.Poster} alt="" />
          <div className="flex items-center justify-around pt-5">
            <button
              className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
              onClick={closeInfo}
            >
              Close
            </button>
            <a
              href={imdbLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-700 border border-black hover:border:black text-white font-bold py-2 px-4 rounded"
            >
              <p className="text-yellow-400">
                IMDb: <span className="text-white">
                  {selected.imdbRating}
                </span>
              </p>
            </a>
          </div>
        </div>
        <div className="pl-8 w-8/12">
          <h1
            className="text-white font-light text-5xl tracking-wider"
          >
            {selected.Title}
            <span
              className="text-3xl text-gray-700 tracking-wider font-sans pl-2"
            >
              ({selected.Year})
            </span>
          </h1>
          <p className="text-gray-700 text-lg">
            {selected.Runtime} | {selected.Genre}
          </p>
          <p className="text-gray-200 text-xl py-4">{selected.Plot}</p>
          <p className="text-gray-700 text-lg font-bold py-2">
            Director: <span className="text-gray-200 font-normal">
              {selected.Director}
            </span>
          </p>
          <p className="text-gray-700 text-lg font-bold py-2">
            Writer: <span className="text-gray-200 font-normal">
              {selected.Writer}
            </span>
          </p>
          <p className="text-gray-700 text-lg font-bold py-2">
            Actors: <span className="text-gray-200 font-normal">
              {selected.Actors}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
