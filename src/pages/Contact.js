import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoCloseCircleOutline } from 'react-icons/io5';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [sub, setSub] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSub(true);
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
          Contact Us
        </h2>
      </div>

      {/* form */}
      <div className="container py-5 md:w-3/6">
        <Transition
          show={sub}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="bg-green-500 text-gray-50 py-2 px-1 rounded-md my-1 shadow-md text-center font-medium"
        >
          Message Sent Successfully!!!
          <button onClick={() => setSub((sub) => !sub)} className="ml-2">
            <IoCloseCircleOutline className="h-5 w-5 inline-block text-red-600 bg-white rounded-full" />
          </button>
        </Transition>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Name */}
          <label
            htmlFor="fullname"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name :
          </label>
          <input
            type="text"
            id="fullname"
            {...register('fullname', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p className="text-red-700">
            {errors.fullname && <span>This field is required</span>}
          </p>
          {/* Email */}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p className="text-red-700">
            {errors.email && <span>This field is required</span>}
          </p>
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
          {/* Trip Option */}
          <label
            htmlFor="trip"
            className="block text-sm font-medium text-gray-700"
          >
            Interested In :
          </label>
          <select
            {...register('trip')}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          >
            <option value="asia">Asia Trip</option>
            <option value="europe">Europe Trip</option>
            <option value="australia">Australia</option>
          </select>
          <p className="text-red-700">
            {errors.trip && <span>This field is required</span>}
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
            {...register('person', { required: true, min: 6 })}
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p className="text-red-700">
            {errors.person && <span>This field is required</span>}
          </p>

          {/* Button */}
          <button className="bg-blue-800 hover:bg-blue-900 transition delay-75 text-gray-100 py-2 px-2.5 my-1.5 rounded-md shadow-md">
            Send Message
          </button>
        </form>
      </div>

      {/* office */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          style={{
            background: `linear-gradient(0deg
        , #11182773, #111827), url("/img/contact-bg-1.jpg")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center center',
          }}
        >
          <div className="text-center text-white py-10">
            <h2 className="font-semibold text-3xl">California</h2>
            <p>78 Collective Street United State</p>
            <p>Manhattan</p>
            <p>Kingston</p>
          </div>
        </div>
        <div
          style={{
            background: `linear-gradient(0deg
        , #11182773, #111827), url("/img/contact-bg-2.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center center',
          }}
        >
          <div className="text-center text-white py-10">
            <h2 className="font-semibold text-3xl">London</h2>
            <p>78 Collective Street United State</p>
            <p>Manhattan</p>
            <p>Kingston</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
