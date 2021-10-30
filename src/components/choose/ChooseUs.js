import React from 'react';
import SingleChoose from './SingleChoose';

const ChooseUs = () => {
  const chooseData = [
    {
      img: 'https://i.ibb.co/kmzLrPD/Map-Marker-300x300.png',
      title: 'Handpicked Hotels',
      details:
        'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
    },
    {
      img: 'https://i.ibb.co/F4j7jG9/Worldwide-Location-300x300.png',
      title: 'World Class Service',
      details:
        'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
    },
    {
      img: 'https://i.ibb.co/SBHQ9B3/Hot-Air-Balloon-300x300.png',
      title: 'Best Price Guarantee',
      details:
        'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
    },
  ];

  return (
    <div>
      <h2 className="text-gray-900 text-center font-semibold text-3xl py-5">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-10">
        {chooseData.map((chdata) => (
          <SingleChoose key={chdata.title} chdata={chdata}></SingleChoose>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
