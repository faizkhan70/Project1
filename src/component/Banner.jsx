import React from 'react';

const Banner = () => {
  return (
    <div className="w-full mt-12 p-4 relative dm:mt-5">
      {/* Banner Image */}
      <div className="w-full">
        <img 
          src="https://i.ibb.co/3YhbVM1/Rectangle-319.png" 
          alt="Black Friday Banner" 
          className="w-full h-auto" 
        />
      </div>

      {/* Sandal Images */}
      <div className="absolute inset-0 flex justify-center items-center space-x-4 mt-5">
        <img 
          src="https://i.ibb.co/4gJMWJC/IMG-2744ss-copy-4.png" 
          alt="Sandal Image 1" 
          className="w-[150px] ms:w-[80px] md:w-[200px] lg:w-[250px] h-auto" 
        />
        <img 
          src="https://i.ibb.co/4gJMWJC/IMG-2744ss-copy-4.png" 
          alt="Sandal Image 2" 
          className="w-[150px] ms:w-[80px] md:w-[200px] lg:w-[250px] h-auto" 
        />
      </div>
    </div>
  );
}

export default Banner;
