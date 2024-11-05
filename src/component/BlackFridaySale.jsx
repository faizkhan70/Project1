import React from 'react';

const BlackFridaySale = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 p-4">
      {/* Left Shoe Image */}
      <div className="w-full sm:w-1/3">
        <img
          src="https://i.ibb.co/FhvNwjL/Rectangle-311-1.png"
          alt="Left shoe collection"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Black Friday Sale Center Image */}
      <div className="w-full sm:w-1/3 flex justify-center items-center">
        <img
          src="https://i.ibb.co/ccxsqpr/Rectangle-313-1.png"
          alt="Black Friday Sale"
          className="w-full h-auto object-cover shadow-lg "
        />
      </div>

      {/* Right Shoe Image */}
      <div className="w-full sm:w-1/3">
        <img
          src="https://i.ibb.co/yfdG72m/Rectangle-312-1.png"
          alt="Right shoe collection"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default BlackFridaySale;
