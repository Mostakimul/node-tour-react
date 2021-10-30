import React from 'react';
import { useHistory } from 'react-router';

const Error = () => {
  let history = useHistory();

  function handleClick() {
    history.push('/home');
  }

  return (
    <div className="h-screen text-center py-14 space-y-5">
      <h2 className="text-6xl text-gray-800 font-bold">404!</h2>
      <h3 className="text-4xl text-gray-800 font-semibold">
        Sorry! The Page Not Found
      </h3>
      <p className="text-lg font-normal">
        Oops! The page you are looking for does not exit. it might been moved or
        deleted.
      </p>
      <button
        onClick={handleClick}
        className="bg-blue-800 text-white py-3 px-7 font-semibold rounded-md shadow"
      >
        Return to Home
      </button>
    </div>
  );
};

export default Error;
