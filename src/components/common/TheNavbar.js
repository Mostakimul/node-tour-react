import { Disclosure } from '@headlessui/react';
import { React } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const TheNavbar = () => {
  const { user, logOut, isAdmin } = useAuth();
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-2">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://i.ibb.co/NntQHsy/logo-2x-white.png"
                      alt="GTour"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://i.ibb.co/NntQHsy/logo-2x-white.png"
                      alt="Gtour"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Home
                    </Link>
                    <Link
                      to="/tour-packages"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Tour Packages
                    </Link>
                    <Link
                      to="/our-destinations"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Destinations
                    </Link>
                    <Link
                      to="/event-packages"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Event Packages
                    </Link>
                    <Link
                      to="/about-us"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/gallery"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Gallery
                    </Link>
                    <Link
                      to="/contact-us"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Contact
                    </Link>
                    {isAdmin ? (
                      <>
                        <Link
                          to="/admin/add-destinantion"
                          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          Add Destinantion
                        </Link>
                        <Link
                          to="/admin/add-tour"
                          className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          Add Tour
                        </Link>
                      </>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 block sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {user?.email ? (
                  <>
                    <div className="bg-gray-800 p-1 rounded-full text-gray-400 text-center hover:text-white">
                      {user?.displayName}
                    </div>
                    <div className="ml-3 relative">
                      <div>
                        <div className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <button
                            onClick={logOut}
                            className="text-white font-medium"
                          >
                            Logout{' '}
                            <FaSignOutAlt
                              className="inline-block w-5 h-5 text-white
                      bg-gray-900 rounded-full"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative text-center">
                    <Link
                      to="/login"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/tour-packages"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Tour Packages
              </Link>
              <Link
                to="/our-destinations"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Destinations
              </Link>
              <Link
                to="/event-packages"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Event Packages
              </Link>
              <Link
                to="/about-us"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/gallery"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Gallery
              </Link>
              <Link
                to="/contact-us"
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default TheNavbar;
