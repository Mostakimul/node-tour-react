import { Transition } from '@headlessui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { id } = useParams();

  const { user } = useAuth();

  const [book, setBook] = useState(false);

  const onSubmit = (data) => {
    data.email = user?.email;
    data.name = user?.displayName;
    data.tourId = id;
    data.status = 'pending';

    axios
      .post('http://localhost:5000/addBooking', data)
      .then((res) => {
        if (res.data.insertedId) {
          setBook(true);
        }
        reset({});
      })
      .catch((err) => {
        console.log(err);
      });
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
          Book Now
        </h2>
      </div>

      {/* form */}

      <div className="container py-5 md:w-3/6">
        <h2 className="text-gray-900 text-lg my-1">Name: {user.displayName}</h2>
        <h3 className="text-gray-900 text-lg my-1">Email: {user.email}</h3>
        <Transition
          show={book}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="bg-green-500 text-gray-50 py-2 px-1 rounded-md my-1 shadow-md text-center font-medium"
        >
          Booked tour Successfully!!!
          <button onClick={() => setBook((book) => !book)} className="ml-2">
            <IoCloseCircleOutline className="h-5 w-5 inline-block text-red-600 bg-white rounded-full" />
          </button>
        </Transition>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Phone */}
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone', { required: true, min: 6 })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p className="text-red-700">
            {errors.phone && <span>This field is required</span>}
          </p>

          {/* Person */}
          <label
            htmlFor="person"
            className="block text-sm font-medium text-gray-700"
          >
            Number of person :
          </label>
          <input
            type="number"
            id="person"
            {...register('person', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p className="text-red-700">
            {errors.person && <span>This field is required</span>}
          </p>

          {/* Button */}
          <button className="bg-blue-800 hover:bg-blue-900 transition delay-75 text-gray-100 py-2 px-2.5 my-1.5 rounded-md shadow-md">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
