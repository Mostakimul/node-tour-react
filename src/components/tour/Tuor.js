import React from 'react';
import { Link } from 'react-router-dom';

const Tuor = ({ tours }) => {
  const { _id, small_img, price, city } = tours;
  return (
    <div className="bg-white rounded-md shadow-md p-2 hover:shadow-xl hover:transition hover:ease-in-out hover:duration-700">
      <img className="rounded-md" src={small_img} alt={city} />
      <h2 className="text-xl font-semibold text-center my-1">{city}</h2>
      <p className="bg-red-500 text-white text-xl font-semibold rounded-md text-center shadow-md py-1.5">
        ${price}
      </p>
      <Link
        className="bg-blue-500 block my-2 text-white text-xl font-semibold rounded-md text-center shadow-md py-1.5"
        to={`/packages-details/${_id}`}
      >
        Click to see details
      </Link>
    </div>
  );
};

export default Tuor;
