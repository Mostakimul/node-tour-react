import React from 'react';
import { Link } from 'react-router-dom';

const EventPackage = () => {
  const packages = [
    {
      id: 1,
      type: 'Personal',
      price: '199',
      duration: 'Half',
      high_img: '10',
      f_img: '1',
      outfit: '2',
      cd_img: '100',
      photographer: '1',
    },
    {
      id: 2,
      type: 'Group',
      price: '399',
      duration: 'Full',
      high_img: '50',
      f_img: '5',
      outfit: '5',
      cd_img: '300',
      photographer: '2',
    },
    {
      id: 3,
      type: 'Personal',
      price: '299',
      duration: 'Full',
      high_img: '30',
      f_img: '3',
      outfit: '3',
      cd_img: '199',
      photographer: '1',
    },
    {
      id: 4,
      type: 'Group',
      price: '599',
      duration: 'Full',
      high_img: '99',
      f_img: '10',
      outfit: '10',
      cd_img: '499',
      photographer: '5',
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div
        style={{
          background: `linear-gradient(0deg
      , #11182773, #111827), url("/img/pricing-bg.jpg")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          height: '30vh',
        }}
        className="flex justify-center items-center"
      >
        <h2 className="text-center py-5 text-gray-100 text-3xl font-medium">
          Pricing Tables
        </h2>
      </div>

      {/* Pricing Tables */}
      <div className="bg-gray-50 py-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {packages.map((pack) => {
              return (
                <div
                  key={pack.id}
                  className="bg-white hover:shadow-xl rounded-md text-center py-5 space-y-4 shadow-md"
                >
                  <h2 className="font-semibold text-red-500 text-3xl">
                    {pack.type}
                  </h2>
                  <h3 className="bg-blue-50 py-5 ">
                    ${' '}
                    <span className="font-semibold text-5xl">{pack.price}</span>{' '}
                  </h3>
                  <p className="text-gray-500 font-medium text-lg">
                    {pack.duration} Day Event
                  </p>
                  <p className="text-gray-500 font-medium text-lg">
                    {pack.high_img} Printed High-res Images
                  </p>
                  <p className="text-gray-500 font-medium text-lg">
                    {pack.f_img} Framed Images
                  </p>
                  <p className="text-gray-500 font-medium text-lg">
                    Up to {pack.cd_img} High-res Images on CD
                  </p>
                  <p className="text-gray-500 font-medium text-lg">
                    {pack.photographer} Photographer
                  </p>

                  <Link
                    to="contact-us"
                    className="bg-red-500 text-center font-semibold py-3 px-5 text-white capitalize rounded-md shadow-md inline-block"
                  >
                    Contact Now
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPackage;
