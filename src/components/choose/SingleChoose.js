import React from 'react';

const SingleChoose = ({ chdata }) => {
  const { img, title, details } = chdata;
  return (
    <div className="rounded-md shadow-md p-5 m-10 bg-white hover:shadow-xl hover:bg-gray-50">
      <img src={img} alt={title} className="mx-auto w-2/5" />
      <h2 className="text-gray-900 text-2xl font-semibold">{title}</h2>
      <p>{details}</p>
    </div>
  );
};

export default SingleChoose;
