import React from 'react';
import { Link } from 'react-router-dom';

const Destinantion = ({ dest }) => {
  const { _id, destinantion, small_img } = dest;
  // our-destinations/:id

  return (
    <Link
      to={`/destination/${_id}`}
      className="bg-white rounded-md shadow-md p-2 hover:shadow-xl hover:transition hover:ease-in-out hover:duration-700"
    >
      <img className="rounded-md" src={small_img} alt={destinantion} />
      <h2 className="text-xl font-semibold text-center my-1">{destinantion}</h2>
    </Link>
  );
};

export default Destinantion;
