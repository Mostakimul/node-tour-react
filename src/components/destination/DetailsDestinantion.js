import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailsDestinantion = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/destinantionDetails/${id}`)
      .then((res) => {
        if (res.data) {
          setDestination(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="bg-gradient-to-r from-gray-700 via-blue-800 to-gray-700">
        <h2 className="text-center py-5 text-gray-100 text-3xl font-medium">
          Details Destinantion: {destination.destinantion}
        </h2>
      </div>
      <div
        style={{
          background: `linear-gradient(0deg
        , #11182773, #111827), url(${destination.cover_url})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '50vh',
        }}
      >
        <h2 className="text-center text-white font-semibold text-4xl pt-10">
          {destination.destinantion}
        </h2>
      </div>
      <div className="container py-10 space-y-2">
        <h3 className="font-semibold text-2xl">
          {destination.destinantion_title}
        </h3>
        <p>{destination.destinantion_details}</p>
      </div>
    </div>
  );
};

export default DetailsDestinantion;
