import { Transition } from '@headlessui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoCloseCircleOutline } from 'react-icons/io5';
const AddDestinations = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [successMsg, setSuccessMsg] = useState(false);

  // adding dest
  const onSubmit = (data) => {
    axios
      .post('http://localhost:5000/addDestinantion', data)
      .then((res) => {
        if (res.data.insertedId) {
          setSuccessMsg(true);
        }
        reset({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-gray-100">
      <div className="bg-gradient-to-r from-gray-700 via-blue-800 to-gray-700">
        <h2 className="text-center py-5 text-gray-100 text-3xl font-medium">
          Add Destination
        </h2>
      </div>
      <div className="container py-5 md:w-3/6">
        <Transition
          show={successMsg}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="bg-green-500 text-gray-50 py-2 px-1 rounded-md my-1 shadow-md text-center font-medium"
        >
          Destinantion Inserted Successfully!!!
          <button
            onClick={() => setSuccessMsg((successMsg) => !successMsg)}
            className="ml-2"
          >
            <IoCloseCircleOutline className="h-5 w-5 inline-block text-red-600 bg-white rounded-full" />
          </button>
        </Transition>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Destination */}
          <label
            htmlFor="destinantion"
            className="block text-sm font-medium text-gray-700"
          >
            Destination :
          </label>
          <input
            type="text"
            {...register('destinantion', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.destinantion && <span>This field is required</span>}</p>
          {/* Destination small image url */}
          <label
            htmlFor="small_img"
            className="block text-sm font-medium text-gray-700"
          >
            Destination small image url :
          </label>
          <input
            type="text"
            {...register('small_img', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.small_img && <span>This field is required</span>}</p>
          {/* Destinantion title in details */}
          <label
            htmlFor="destinantion_title"
            className="block text-sm font-medium text-gray-700"
          >
            Detailed Title :
          </label>
          <input
            type="text"
            {...register('destinantion_title', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>
            {errors.destinantion_title && <span>This field is required</span>}
          </p>
          {/* Destinantion details */}
          <label
            htmlFor="destinantion_details"
            className="block text-sm font-medium text-gray-700"
          >
            Detailed Deatils :
          </label>
          <textarea
            type="text"
            {...register('destinantion_details', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>
            {errors.destinantion_details && <span>This field is required</span>}
          </p>

          {/* cover image url */}
          <label
            htmlFor="cover_url"
            className="block text-sm font-medium text-gray-700"
          >
            Cover Image Url :
          </label>
          <input
            type="text"
            {...register('cover_url', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.cover_url && <span>This field is required</span>}</p>

          {/* Button */}
          <button className="bg-blue-800 hover:bg-blue-900 transition delay-75 text-gray-100 py-2 px-2.5 w-full my-1.5 rounded-md shadow-md">
            Add Destinantion
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDestinations;
