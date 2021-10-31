import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import MyBooking from './MyBooking';

const MyBookings = () => {
  // history, location
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || '/home';

  const [myBook, setMyBook] = useState([]);

  const { user, isAdmin } = useAuth();

  if (isAdmin) {
    history.push(url);
  }

  useEffect(() => {
    axios
      .get(`https://stark-beach-13541.herokuapp.com/myBookings/${user.email}`)
      .then((res) => {
        if (res.data) {
          setMyBook(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // handleDelete
  const handleDelete = (id) => {
    let sure = window.confirm('Are you sure');
    if (sure) {
      axios
        .delete(`https://stark-beach-13541.herokuapp.com/deleteBooking/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            const remainigBook = myBook.filter(
              (bookDetail) => bookDetail._id !== id
            );
            setMyBook(remainigBook);
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
              {myBook.map((book) => (
                <MyBooking
                  key={book._id}
                  book={book}
                  handleDelete={handleDelete}
                ></MyBooking>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
