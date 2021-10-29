import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { signInWithGoogle, setUser, setIsLoading, user } = useAuth();

  // history, location
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || '/home';

  // redirect user
  if (user.email) {
    history.push('/home');
  }

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
    <div className="bg-blue-100 min-h-screen">
      <div className="container py-2">
        <div className="bg-gray-50 my-2 py-5 text-center rounded-md shadow-md">
          <h3 className="text-4xl text-gray-800 font-medium capitalize">
            Login page
          </h3>
        </div>
        <div className="text-center">
          <button
            className="bg-red-700 py-2 px-5 text-white capitalize rounded-md shadow-md"
            onClick={handleGoogleSignIn}
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
