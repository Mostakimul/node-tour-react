import React from 'react';
import { Link } from 'react-router-dom';

const TheFooter = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="container">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 py-10 text-white">
            {/* conatct */}
            <div className="space-y-2">
              <h3 className="font-semibold text-2xl">Contact Us</h3>
              <p>Email: hello@disin.com</p>
              <p>Phone: +70 554 2254</p>
              <p>Location: Via Rogoredo, Mialn, Italy</p>
            </div>
            {/* page link */}
            <div>
              <h3 className="font-semibold text-2xl">Quick Links</h3>
              <Link to="/" className="block">
                Home
              </Link>
              <Link to="/tour-packages" className="block">
                Tour Packages
              </Link>
              <Link to="/our-destinations" className="block">
                Destination
              </Link>
              <Link to="/event-packages" className="block">
                Event Packages
              </Link>
              <Link to="/about-us" className="block">
                About Us
              </Link>
              <Link to="/gallery" className="block">
                Gallery
              </Link>
              <Link to="/contact-us" className="block">
                Contact
              </Link>
            </div>
            {/* seriveces */}
            <div>
              <h3 className="font-semibold text-2xl">Our Destitnation</h3>
              <p>Tokyo</p>
              <p>Paris</p>
              <p>Milan</p>
              <p>Miami</p>
              <p>California</p>
            </div>
          </div>
        </div>
      </div>
      {/* copyright section */}
      <div className="bg-gray-900 py-2 text-center">
        <p className="text-white font-medium text-base">
          Copyright &#169;2021 Developed by Mostakimul Karim
        </p>
      </div>
    </div>
  );
};

export default TheFooter;
