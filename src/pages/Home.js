import React from 'react';
import ChooseUs from '../components/choose/ChooseUs';
import Destinantions from '../components/destination/Destinantions';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <main className="bg-gray-100">
      {/* Header part */}
      <Header />
      {/* All Destinantion Part */}
      <section className="container">
        <h2 className="text-gray-900 text-3xl font-semibold text-center py-5">
          Our Destinations
        </h2>
        <Destinantions />
      </section>

      {/* Choose us */}
      <section className="container py-5">
        <ChooseUs />
      </section>
    </main>
  );
};

export default Home;
