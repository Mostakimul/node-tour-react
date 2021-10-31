import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
  const [myBook, setMyBook] = useState([]);
  const [bookDetails, setBookDetails] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/myBookings/${user.email}`)
      .then((res) => {
        if (res.data) {
          setMyBook(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    myBook.map((booking) => {
      axios
        .get(`http://localhost:5000/tourDeatils/${booking.tourId}`)
        .then((res) => {
          if (res.data) {
            let tripData = res.data;
            tripData.status = booking.status;
            tripData.bId = booking._id;
            setBookDetails([...bookDetails, tripData]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [myBook]);

  // handleDelete
  const handleDelete = (id) => {
    let sure = window.confirm('Are you sure');
    if (sure) {
      axios
        .delete(`http://localhost:5000/deleteBooking/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            const remainigBook = bookDetails.filter(
              (bookDetail) => bookDetail.bId !== id
            );
            setBookDetails(remainigBook);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
          My Bookings
        </h2>
      </div>

      <div className="container">
        <div className="text-center w-4/5 mx-auto py-10">
          <table className="table-auto w-full border-collapse border border-gray-800">
            <thead>
              <tr>
                <th className="border border-gray-600">City</th>
                <th className="border border-gray-600">Date</th>
                <th className="border border-gray-600">Country</th>
                <th className="border border-gray-600">Status</th>
                <th className="border border-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookDetails.map((bkdetails) => {
                return (
                  <tr key={bkdetails._id}>
                    <td className="border border-gray-600">{bkdetails.city}</td>
                    <td className="border border-gray-600">{bkdetails.date}</td>
                    <td className="border border-gray-600">
                      {bkdetails.country}
                    </td>
                    <td className="border border-gray-600">
                      {bkdetails.status}
                    </td>
                    <td className="border border-gray-600">
                      <button
                        onClick={() => handleDelete(bkdetails.bId)}
                        className="block bg-red-700 text-white py-1 px-2 m-1 mx-auto rounded-md"
                      >
                        Delete Booking
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
