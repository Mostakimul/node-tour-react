import React from 'react';

const Gallery = () => {
  const imgLinks = [
    { img: 'https://i.ibb.co/HK1hpzj/frenchautum.jpg' },
    { img: 'https://i.ibb.co/kGD9Hkq/grand-Switchxerland.jpg' },
    { img: 'https://i.ibb.co/CvcHJTx/london.jpg' },
    { img: 'https://i.ibb.co/6X0w124/hongkong.jpg' },
    { img: 'https://i.ibb.co/NgBc1Gw/lake5fuzi.jpg' },
    { img: 'https://i.ibb.co/JCn5fsZ/tokyo.jpg' },
    { img: 'https://i.ibb.co/JxmmCHv/seoul.jpg' },
    { img: 'https://i.ibb.co/pjkwdJt/swiss-Alpstrip.jpg' },
    { img: 'https://i.ibb.co/gPFSLR7/california.jpg' },
    { img: 'https://i.ibb.co/q7j9QgT/colorfulsingapore.jpg' },
    { img: 'https://i.ibb.co/DQPzvZX/koyto.jpg' },
    { img: 'https://i.ibb.co/gdrBjNJ/prague.jpg' },
  ];
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
          Gallery
        </h2>
      </div>

      {/* Images */}
      <div className="container py-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {imgLinks.map((img) => {
            return (
              <div className="bg-white rounded-md shadow-md p-2 hover:shadow-xl hover:transition hover:ease-in-out hover:duration-700">
                <img className="rounded-md" src={img.img} alt="img" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
