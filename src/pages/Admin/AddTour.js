import { Transition } from '@headlessui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AddTour = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { isAdmin } = useAuth();
  // history, location
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || '/home';

  if (!isAdmin) {
    history.push(url);
  }

  const [successMsg, setSuccessMsg] = useState(false);

  // adding tour
  const onSubmit = (data) => {
    axios
      .post('http://localhost:5000/addTour', data)
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
          Tour Inserted Successfully!!!
          <button
            onClick={() => setSuccessMsg((successMsg) => !successMsg)}
            className="ml-2"
          >
            <IoCloseCircleOutline className="h-5 w-5 inline-block text-red-600 bg-white rounded-full" />
          </button>
        </Transition>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Place */}
          <label
            htmlFor="place_name"
            className="block text-sm font-medium text-gray-700"
          >
            Tour Plcae :
          </label>
          <input
            type="text"
            {...register('place_name', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.place_name && <span>This field is required</span>}</p>
          {/* Price */}
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price :
          </label>
          <input
            type="text"
            {...register('price', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.price && <span>This field is required</span>}</p>
          {/* City */}
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City :
          </label>
          <input
            type="text"
            {...register('city', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.city && <span>This field is required</span>}</p>

          {/* Country */}
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country :
          </label>
          <input
            type="text"
            {...register('country', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.country && <span>This field is required</span>}</p>
          {/* Duration */}
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration (in days) :
          </label>
          <input
            type="text"
            {...register('duration', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.duration && <span>This field is required</span>}</p>
          {/* Age */}
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Min age :
          </label>
          <input
            type="text"
            {...register('age', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.age && <span>This field is required</span>}</p>
          {/* Availability */}
          <label
            htmlFor="available"
            className="block text-sm font-medium text-gray-700"
          >
            Availability (#no of person) :
          </label>
          <input
            type="text"
            {...register('available', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.available && <span>This field is required</span>}</p>
          {/* Date */}
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date :
          </label>
          <input
            type="date"
            {...register('date', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.date && <span>This field is required</span>}</p>
          {/* Departure Place */}
          <label
            htmlFor="dept_place"
            className="block text-sm font-medium text-gray-700"
          >
            Departure Place :
          </label>
          <input
            type="text"
            {...register('dept_place', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.dept_place && <span>This field is required</span>}</p>
          {/* Departure time */}
          <label
            htmlFor="dept_time"
            className="block text-sm font-medium text-gray-700"
          >
            Departure Time :
          </label>
          <input
            type="text"
            {...register('dept_time', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.dept_time && <span>This field is required</span>}</p>
          {/* Return time */}
          <label
            htmlFor="return_date_time"
            className="block text-sm font-medium text-gray-700"
          >
            Retrun Date & Time :
          </label>
          <input
            type="text"
            {...register('return_date_time', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>
            {errors.return_date_time && <span>This field is required</span>}
          </p>
          {/* Includes */}
          <label
            htmlFor="includes"
            className="block text-sm font-medium text-gray-700"
          >
            Includes :
          </label>
          <input
            type="text"
            {...register('includes', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.includes && <span>This field is required</span>}</p>
          {/* Not Includes */}
          <label
            htmlFor="not_includes"
            className="block text-sm font-medium text-gray-700"
          >
            Not Includes :
          </label>
          <input
            type="text"
            {...register('not_includes', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.not_includes && <span>This field is required</span>}</p>
          {/* Cover Image */}
          <label
            htmlFor="cover_img"
            className="block text-sm font-medium text-gray-700"
          >
            Cover Image :
          </label>
          <input
            type="text"
            {...register('cover_img', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.cover_img && <span>This field is required</span>}</p>
          {/* small Image */}
          <label
            htmlFor="small_img"
            className="block text-sm font-medium text-gray-700"
          >
            Small Image :
          </label>
          <input
            type="text"
            {...register('small_img', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p>{errors.small_img && <span>This field is required</span>}</p>

          {/* Button */}
          <button className="bg-blue-800 hover:bg-blue-900 transition delay-75 text-gray-100 py-2 px-2.5 w-full my-1.5 rounded-md shadow-md">
            Add Tour
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTour;
