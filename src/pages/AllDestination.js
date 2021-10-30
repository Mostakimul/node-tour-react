import React from 'react';
import Destinantions from '../components/destination/Destinantions';

const AllDestination = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-gradient-to-r from-gray-700 via-blue-800 to-gray-700">
        <h2 className="text-center py-5 text-gray-100 text-3xl font-medium">
          All Destinations
        </h2>
      </div>
      <div className="container">
        <Destinantions />
      </div>
    </div>
  );
};

export default AllDestination;
