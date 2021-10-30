import React from 'react';

const About = () => {
  const team = [
    { img: '/img/team-1.jpeg', name: 'Jessica Lee', des: 'CEO' },
    { img: '/img/team-2.jpeg', name: 'John Bennett', des: 'Asia Tour Expert' },
    {
      img: '/img/team-3.jpeg',
      name: 'Christina Hardy',
      des: 'Marketing Manager',
    },
    { img: '/img/team-4.jpeg', name: 'Oliver Doe', des: 'Europe Tour Expert' },
    { img: '/img/team-5.jpeg', name: 'Jane Bennett', des: 'Customer Support' },
  ];

  return (
    <div className="bg-gray-100">
      {/* Header Section */}
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
          About Us
        </h2>
      </div>

      {/* Happ customer section */}
      <div className="bg-gray-900 py-10">
        <div className="container text-center space-y-3">
          <h2 className="text-gray-50 text-4xl font-semibold md:w-1/2 mx-auto">
            This adventure isn’t about change but it seems to be an
            inevitability.
          </h2>
          <p className="text-gray-50 font-medium md:w-1/2 mx-auto">
            Meh synth Schlitz, tempor duis single-origin coffee ea next level
            ethnic fingerstache fanny pack nostrud.Photo booth anim 8-bit hella,
            PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian
            Truffaut synth art party deep v chillwave. Seitan High Life
            reprehenderit consectetur cupidatat kogi. Et leggings fanny pack,
            elit bespoke vinyl art party Pitchfork selfies master cleanse.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-50 py-10">
            <div className="justify-self-center md:justify-self-end mx-10">
              <h4 className="text-4xl md:text-7xl">1,115</h4>
              <p className="text-lg md:text-3xl">Trips</p>
            </div>
            <div className="justify-self-center md:justify-self-start mx-10">
              <h4 className="text-4xl md:text-7xl">10,805</h4>
              <p className="text-lg md:text-3xl">Happy Cutomer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Team */}
      <div className="bg-white py-10">
        <div className="container">
          <h2 className="text-center text-4xl font-semibold text-gray-900 py-5">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
            {team.map((tm) => {
              return (
                <div className="text-center py-5">
                  <img
                    src={tm.img}
                    alt={tm.name}
                    className="rounded-full w-2/4 mx-auto"
                  />
                  <h2 className="text-gray-900 font-semibold text-2xl pt-4">
                    {tm.name}
                  </h2>
                  <p className="text-gray-500 font-semibold">{tm.des}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
