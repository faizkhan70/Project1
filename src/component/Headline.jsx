import React from 'react';

const Headline = () => {
  return (
    <div className="bg-black text-white p-6 md:p-16 flex flex-col md:flex-row justify-between items-center">
      <div className="text-lg md:text-2xl mb-4 md:mb-0 text-center md:text-left">
        <p className="font-thin">
          We believe in <span className="font-bold">providing quality products</span><br />
          from reputed manufacturers.
        </p>
      </div>
      <button className="border text-lg md:text-2xl border-white font-semibold text-white px-10 md:px-14 py-2 md:py-4 hover:bg-white hover:text-black transition">
        ORDER NOW
      </button>
    </div>
  );
};

export default Headline;
