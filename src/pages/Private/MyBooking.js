import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyBooking = ({ book, handleDelete }) => {
  const [bookDetails, setBookDetails] = useState({});

  const { _id, tourId, status } = book;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tourDeatils/${tourId}`)
      .then((res) => {
        if (res.data) {
          let tripData = res.data;
          tripData.status = status;
          tripData.bId = tourId;
          setBookDetails(tripData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <tr>
      <td className="border border-gray-600">{bookDetails.city}</td>
      <td className="border border-gray-600">{bookDetails.date}</td>
      <td className="border border-gray-600">{bookDetails.country}</td>
      <td className="border border-gray-600">{bookDetails.status}</td>
      <td className="border border-gray-600">
        <button
          onClick={() => handleDelete(_id)}
          className="block bg-red-700 text-white py-1 px-2 m-1 mx-auto rounded-md"
        >
          Delete Booking
        </button>
      </td>
    </tr>
  );
};

export default MyBooking;
