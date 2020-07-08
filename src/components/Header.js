import React from "react";

const Header = ({ getMovie }) => {
  const movieInput = (e) => {
    getMovie(e.target.value);
  };
  return (
    <div className="bg-gray-900 flex flex-col items-center">
      <h1 className="text-white font-light text-5xl tracking-widest my-1">
        Movie<span className="font-medium text-gray-500">DB</span>
      </h1>
      <input
        autoFocus
        type="text"
        placeholder="Type to begin search.."
        onChange={movieInput}
        className="mb-4 w-4/12 bg-gray-200 appearance-none border-2 border-gray-700 rounded py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-700"
      />
    </div>
  );
};

export default Header;
