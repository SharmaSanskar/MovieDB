import React from "react";

const NotFound = ({ showHome }) => {
  return (
    <div className="flex items-center justify-center mt-20">
      {showHome
        ? (
          <div className="flex flex-col items-center text-gray-700">
            <h1 className="text-4xl font-semibold tracking-wider">
              Welcome to MovieDB
            </h1>
            <h2 className="text-2xl font-normal tracking-wide">
              Search for a movie name to begin
            </h2>
          </div>
        )
        : (
          <div className="flex flex-col items-center text-gray-700">
            <h1 className="text-4xl font-semibold tracking-wider">
              No movies found
            </h1>
            <h2 className="text-2xl font-normal tracking-wide">
              Try searching for a different movie
            </h2>
          </div>
        )}
    </div>
  );
};

export default NotFound;
