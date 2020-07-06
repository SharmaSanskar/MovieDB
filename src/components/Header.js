import React from 'react';

const Header = ({ getMovie }) => {
  const movieInput = (e) => {
    getMovie(e.target.value);
  };
  return (
    <>
      <h1>MovieDB</h1>
      <section>
        <input type='text' placeholder='Search..' onChange={movieInput} />
      </section>
    </>
  );
};

export default Header;
