import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const {
    signInWithGoogle,
    setUser,
    setIsLoading,
    setIsAdmin,
    user,
    loginWithEmailAndPassword,
  } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // history, location
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || '/home';

  // redirect user
  if (user.email) {
    history.push('/home');
  }

  // handle email sign in
  const onSubmit = (data) => {
    loginWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        setIsLoading(true);
        if (res.user.email === 'admin@gmail.com') {
          setIsAdmin(true);
        }
        setUser(res.user);
        history.push(url);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // handle Google Sign In
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        setIsLoading(true);
        setUser(res.user);
        history.push(url);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
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
          Log In
        </h2>
      </div>
      {/* form */}
      <div className="container py-5 md:w-3/6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {/* Email */}
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register('email', { required: true })}
            required
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p className="text-red-700">
            {errors.email && <span>This field is required</span>}
          </p>
          {/* Password */}
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true, min: 6 })}
            name="password"
            required
            className="mt-1 p-2 border block w-full shadow sm:text-sm border-gray-200 outline-none focus:border-blue-500  ring-gray-400 rounded-md"
          />
          <p className="text-red-700">
            {errors.password && <span>This field is required</span>}
          </p>
          {/* Button */}
          <button className="bg-blue-800 hover:bg-blue-900 transition delay-75 text-gray-100 py-2 px-2.5 w-full my-1.5 rounded-md shadow-md">
            Login
          </button>
        </form>
      </div>

      <div className="text-center pb-10">
        <button
          className="bg-red-700 py-2 px-5 text-white capitalize rounded-md shadow-md"
          onClick={handleGoogleSignIn}
        >
          Sign In with Google
        </button>
        <p className="my-4">Or</p>
        <Link
          className="bg-blue-700 py-2 px-5 text-white capitalize rounded-md inline-block shadow-md"
          to="/register"
        >
          Register Here
        </Link>
      </div>
    </div>
  );
};

export default Login;
