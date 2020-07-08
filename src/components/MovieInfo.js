import React from "react";

const MovieInfo = ({ selected, closeInfo }) => {
  return (
    <div className="bg-gray-900 w-screen min-h-screen">
      <div
        className="container px-5 py-12 max-w-5xl mx-auto flex flex-col md:flex-row"
      >
        <div className="w-full md:w-3/12 pt-4">
          <img
            className="w-full"
            src={selected.Poster}
            alt=""
          />

          <div
            className="flex items-center md:justify-around pt-5 flex-col md:flex-row"
          >
            <button
              className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
              onClick={closeInfo}
            >
              Close
            </button>
            <a
              href={`https://www.imdb.com/title/${selected.imdbID}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-700 border border-black hover:border:black text-white font-bold py-2 px-4 rounded mt-3 md:mt-0"
            >
              <p className="text-yellow-400">
                IMDb: <span className="text-white">
                  {selected.imdbRating}
                </span>
              </p>
            </a>
          </div>
        </div>

        <div
          className="md:pl-8 w-full text-center md:w-8/12 md:text-left"
        >
          <div className="flex flex-col md:flex-row">
            <h1
              className="text-white font-light text-5xl tracking-wider"
            >
              {selected.Title}
              <p
                className="text-3xl text-gray-700 tracking-wider font-sans md:pl-3 md:inline"
              >
                ({selected.Year})
              </p>
            </h1>
          </div>

          <p className="text-gray-700 text-lg">
            {selected.Runtime} | {selected.Genre}
          </p>

          <p className="text-gray-200 text-xl py-4">{selected.Plot}</p>

          {selected.Type === "movie"
            ? <p className="text-gray-700 text-lg font-bold py-2">
              Director: <span className="text-gray-200 font-normal">
                {selected.Director}
              </span>
            </p>
            : <p className="text-gray-700 text-lg font-bold py-2">
              Writer: <span className="text-gray-200 font-normal">
                {selected.Writer}
              </span>
            </p>}

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
