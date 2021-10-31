import React from 'react';
import { Link } from 'react-router-dom';

const Tuor = ({ tours }) => {
  const { _id, small_img, price, city } = tours;
  return (
    <div className="bg-white rounded-md shadow-md p-2 hover:shadow-xl hover:transition hover:ease-in-out hover:duration-700">
      <img className="rounded-md" src={small_img} alt={city} />
      <h2 className="text-xl font-semibold text-center my-1">{city}</h2>
      <div className="flex justify-around items-center">
        <p className="bg-red-500 text-white rounded-md text-center shadow-md py-1 px-3">
          ${price}
        </p>
        <p className="bg-red-500 text-white rounded-md text-center shadow-md py-1 px-3">
          <Link to={`/packages-details/${_id}`}>See Details</Link>
        </p>
      </div>
      <Link
        className="bg-blue-500 block my-2 text-white text-xl font-semibold rounded-md text-center shadow-md py-1.5"
        to={`/book-tour/${_id}`}
      >
        Book Now
      </Link>
    </div>
  );
};

export default Tuor;
