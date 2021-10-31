import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Tuor from './Tuor';

const Tours = () => {
  const [allTours, setAllTours] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    axios
      .get('https://stark-beach-13541.herokuapp.com/allTours')
      .then((res) => {
        setLoad(true);
        if (res.data) {
          setAllTours(res.data);
          setLoad(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" py-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
          allTours.map((tours) => <Tuor key={tours._id} tours={tours}></Tuor>)
        )}
      </div>
    </div>
  );
};

export default Tours;
