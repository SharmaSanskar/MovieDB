import React from 'react';

const NotFound = ({ showHome }) => {
  return (
    <>
      {showHome ? (
        <div>
          <h1>Welcome to MovieDB</h1>
          <h2>Search for a movie name to begin</h2>
        </div>
      ) : (
        <div>
          <h1>No Movies Found</h1>
          <h2>Try searching for a different movie</h2>
        </div>
      )}
    </>
  );
};

export default NotFound;
