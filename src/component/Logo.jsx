import React from 'react';

const Logo = () => {
  const items = [
    { id: 1, image: 'https://i.ibb.co/2Fv1Sjx/rocia-big-1.png' },
    { id: 2,  image: 'https://i.ibb.co/0jHvPm9/inc5-1.png' },
    { id: 3,  image: 'https://i.ibb.co/q01HQ2w/logo-regal-1-1.png' },
    { id: 4,  image: 'https://i.ibb.co/S7Bfqss/metro-logo-pic-1.png' },
    { id: 5,  image: 'https://i.ibb.co/S7Bfqss/metro-logo-pic-1.png' },
    { id: 6,  image: 'https://i.ibb.co/q01HQ2w/logo-regal-1-1.png' },
    { id: 7,  image: 'https://i.ibb.co/0jHvPm9/inc5-1.png' },
    { id: 8,  image: 'https://i.ibb.co/2Fv1Sjx/rocia-big-1.png' },
  ];

  return (
    <div className="container relative z-40 mx-auto mt-12 max-w-full p-4">
      <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
        {items.map((item) => (
          <a key={item.id} href="#" className="block w-1/2 px-4 text-center border lg:w-1/4">
            <div>
              <img src={item.image} alt={item.name} className="block mx-auto" />
              <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                {item.name}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Logo;
