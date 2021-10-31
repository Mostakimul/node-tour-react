import React from 'react';
import Tours from '../components/tour/Tours';

const AllTourPackages = () => {
  return (
    <div className="bg-gray-100">
      <div
        style={{
          background: `linear-gradient(0deg
        , #11182773, #111827), url("https://i.ibb.co/1MDR7Gp/contact-bg.jpg")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          height: '30vh',
        }}
        className="flex justify-center items-center"
      >
        <h2 className="text-center py-5 text-gray-100 text-3xl font-medium">
          All Tours
        </h2>
      </div>
      {/* Tour Container */}
      <div className="bg-gray-100">
        <div className="container py-10">
          <Tours />
        </div>
      </div>
    </div>
  );
};

export default AllTourPackages;
