import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const ManageBooking = () => {
  const { isAdmin } = useAuth();
  // history, location
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || '/home';

  if (!isAdmin) {
    history.push(url);
  }

  const [allBookings, setAllBookings] = useState();
  const [load, setLoad] = useState(true);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/allBookings')
      .then((res) => {
        setAllBookings(res.data);
        setLoad(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [status]);

  // handleStatus
  const handleStatus = (id) => {
    let data = { status: 'approved' };
    axios
      .put(`http://localhost:5000/changeStatus/${id}`, data)
      .then((res) => {
        setStatus(!status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handleDelete
  const handleDelete = (id) => {
    let sure = window.confirm('Are you sure');
    if (sure) {
      axios
        .delete(`http://localhost:5000/deleteBooking/${id}`)
        .then((res) => {
          setStatus(!status);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-gradient-to-r from-gray-700 via-blue-800 to-gray-700">
        <h2 className="text-center py-5 text-gray-100 text-3xl font-medium">
          All bookings
        </h2>
      </div>

      <div className="container">
        <div className="text-center w-4/5 mx-auto py-10">
          {load ? (
            <div>
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            </div>
          ) : (
            <>
              <table className="table-auto w-full border-collapse border border-gray-800">
                <thead>
                  <tr>
                    <th className="border border-gray-600">Name</th>
                    <th className="border border-gray-600">Email</th>
                    <th className="border border-gray-600">Phone</th>
                    <th className="border border-gray-600">Person</th>
                    <th className="border border-gray-600">Status</th>
                    <th className="border border-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allBookings ? (
                    allBookings.map((book) => {
                      return (
                        <tr key={book._id}>
                          <td className="border border-gray-600">
                            {book.name}
                          </td>
                          <td className="border border-gray-600">
                            {book.email}
                          </td>
                          <td className="border border-gray-600">
                            {book.phone}
                          </td>
                          <td className="border border-gray-600">
                            {book.person}
                          </td>
                          <td className="border border-gray-600">
                            {book.status}
                            {book.status === 'pending' ? (
                              <button
                                onClick={() => handleStatus(book._id)}
                                className="block bg-green-700 text-white py-1 px-2 m-1 mx-auto rounded-md"
                              >
                                Click to approve
                              </button>
                            ) : (
                              ''
                            )}
                          </td>
                          <td className="border border-gray-600">
                            <button
                              onClick={() => handleDelete(book._id)}
                              className="block bg-red-700 text-white py-1 px-2 m-1 mx-auto rounded-md"
                            >
                              Delete Booking
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr className="text-center py-5">No Bookings Found!</tr>
                  )}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;
