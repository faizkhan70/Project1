import React from 'react';

const FootwearAd = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full bg-gray-100 py-12 px-8 lg:py-20 lg:px-16 relative">
      {/* Left Section: Text */}
      <div className="flex-1 text-center lg:text-left lg:mb-0">
        <h2 className="text-orange-500 text-lg lg:text-xl font-bold">Step into Style:</h2>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 mt-2">
          Wholesale Wonderland <br /> for Women's Footwear!
        </h1>
        <p className="text-gray-500 mt-4 text-base lg:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
        </p>
        <button className="mt-6 px-8 lg:px-12 py-3 bg-gray-900 text-white text-sm lg:text-base font-medium hover:bg-yellow-400 shadow-lg">
          Shop Now
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="hidden lg:block absolute top-14 right-0 w-full lg:w-1/3">
        <img 
          src="https://i.ibb.co/Dzq7vdV/IMG-2792ss-copy-2-2.png" 
          alt="Women's Footwear" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FootwearAd;
