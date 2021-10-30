import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      style={{
        background: `linear-gradient(0deg
        , #11182773, #111827), url("https://i.ibb.co/CmvG0Ks/hero-bg.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="py-2 min-h-screen"
    >
      <div className="container">
        <div className="min-h-screen grid place-items-center">
          <div className="grid place-items-center space-y-2">
            <h1 className="text-6xl text-gray-50 capitalize font-medium -mt-16 text-center">
              Where do you want to go?
            </h1>
            <p className="text-gray-50 font-medium text-lg">
              Trips, experiences, and places. All in one service.
            </p>
            <div>
              <Link className="bg-red-600 hover:bg-red-700 text-gray-50 py-2 px-5 rounded-md shadow-md m-1 font-medium inline-block">
                See Our Packages
              </Link>
              <Link className="bg-blue-600 hover:bg-blue-700 text-gray-50 py-2 px-5 rounded-md shadow-md m-1 font-medium inline-block">
                Best Destinantions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
