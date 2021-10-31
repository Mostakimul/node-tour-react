import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineCalendar, AiOutlineIdcard } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';
import { useParams } from 'react-router';

const DetailsTour = () => {
  const { id } = useParams();
  const [tour, setTour] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tourDeatils/${id}`)
      .then((res) => {
        if (res.data) {
          setTour(res.data);
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
          Details Destinantion: {tour.city}
        </h2>
      </div>
      <div
        style={{
          background: `linear-gradient(0deg
        , #11182773, #111827), url(${tour.cover_img})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          height: '50vh',
        }}
        className="flex justify-center items-center"
      >
        <div>
          <h2 className="text-center text-white font-semibold text-4xl pt-10">
            {tour.country}
          </h2>
        </div>
      </div>
      <div className="container py-10 space-y-2 ">
        <h3 className="font-semibold text-5xl text-center mb-5 text-gray-900">
          {tour.place_name} <span className="text-gray-600">at</span>{' '}
          <span className="text-red-500">$ {tour.price}</span>
        </h3>
        <div className="w-2/3 mx-auto py-5 my-5 bg-white rounded-md shadow-md">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <div className="text-center">
              <BsClock className="w-6 h-6 mx-auto" />
              <p>{tour.duration} Days</p>
            </div>
            <div className="text-center">
              <AiOutlineIdcard className="w-6 h-6 mx-auto" />
              <p>Age {tour.age} +</p>
            </div>
            <div className="text-center">
              <AiOutlineCalendar className="w-6 h-6 mx-auto" />
              <p>{tour.date}</p>
            </div>
            <div className="text-center">
              <BiUser className="w-6 h-6 mx-auto" />
              <p>{tour.available} Available</p>
            </div>
          </div>
        </div>
        <div className="p-5 my-10 bg-white rounded-md shadow-md">
          <h2 className="text-gray-900 text-center text-3xl font-medium">
            Basic Tour Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 px-5 text-center my-5">
            <div>
              <p className="text-xl">
                <FaPlaneDeparture className="w-10 h-10 text-red-500 mx-auto" />
                Departure Place
              </p>
              <p className="text-blue-600 font-semibold">{tour.dept_place}</p>
            </div>
            <div>
              <p className="text-xl">
                <MdAccessTimeFilled className="w-10 h-10 text-red-500 mx-auto" />
                Departure Time
              </p>
              <p className="text-blue-600 font-semibold">{tour.dept_time}</p>
            </div>
            <div>
              <p className="text-xl">
                <FaPlaneArrival className="w-10 h-10 text-red-500 mx-auto" />
                Return Date & Time
              </p>
              <p className="text-blue-600 font-semibold">
                {tour.return_date_time}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 text-center mt-10">
            <div className="bg-gray-100 py-5 rounded-md shadow-md">
              <h3 className="text-xl">Includes</h3>
              <p className="text-lg font-semibold">{tour.includes}</p>
            </div>
            <div className="bg-gray-100 py-5 rounded-md shadow-md">
              <h3 className="text-xl">Not Includes</h3>
              <p className="text-lg font-semibold">{tour.not_includes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTour;
