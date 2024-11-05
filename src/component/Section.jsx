import React from 'react';

const Section = () => {
  const lightGrayIndexes = [1, 6, 3, 4]; // Indices of boxes to be light gray (#EBEBEB)

  return (
    <div className="bg-white p-8">
      <section className="flex flex-col md:flex-row items-start justify-between">
        {/* Left Section - Sale Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <div className="relative">
            <img
              src="https://i.ibb.co/9Zqw6fC/Rectangle-302-1.png"
              alt="Sale"
              className="w-full h-auto object-cover"
            />
            <img
              src="https://i.ibb.co/B4yqdJd/SALE-3.png"
              alt="Sale text"
              className="absolute bottom-5 left-5 text-white text-6xl font-bold"
            />
          </div>
        </div>

        {/* Right Section - Product Grid */}
        <div className="w-full md:w-2/3 flex justify-center ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 right-36 relative dm:grid-cols-1 dm:left-1 ">
            {/* Collection Items */}
            {[
              { title: "Bridal Collection", img: "https://i.ibb.co/k2DmG99/IMG-2693s-copya-3-1.png" },
              { title: "New Arrivals", img: "https://i.ibb.co/k2DmG99/IMG-2693s-copya-3-1.png" },
              { title: "Casual Collection", img: "https://i.ibb.co/k2DmG99/IMG-2693s-copya-3-1.png" },
              { title: "Diwali Collection", img: "https://i.ibb.co/k2DmG99/IMG-2693s-copya-3-1.png" },
              { title: "Best Selling's", img: "https://i.ibb.co/k2DmG99/IMG-2693s-copya-3-1.png" },
              { title: "Featured Collection", img: "https://i.ibb.co/k2DmG99/IMG-2693s-copya-3-1.png" },
              { title: "Casual Collection", img: "https://i.ibb.co/k2DmG99/IMG-2693s-copya-3-1.png" },
              { title: "Diwali Collection", img: "https://i.ibb.co/k2DmG99/IMG-2693s-copya-3-1.png" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-6 shadow-md relative ${
                  lightGrayIndexes.includes(index) ? 'bg-[#EBEBEB]' : 'bg-gray-100'
                }`}
                style={{ height: '200px', width: '200px' }} // Increased box size
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-32 h-32 object-cover mb-2"
                />
                <p className="text-center">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
