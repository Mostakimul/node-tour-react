import React from 'react';
import Destinantions from '../components/destination/Destinantions';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <main>
      {/* Header part */}
      <Header />
      {/* All Destinantion Part */}
      <section className="container">
        <h2 className="text-3xl font-semibold text-center py-5">
          Our Destinations
        </h2>
        <Destinantions />
      </section>
    </main>
  );
};

export default Home;
