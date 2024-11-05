import React from 'react';

const Category = () => {
  const products = [
    {
      id: 1,
      name: 'Voluptatem Accusantium',
      category: 'Sandals',
      price: '₹145.93',
      image: 'https://i.ibb.co/k2DmG99/IMG-2693s-copya-3-1.png',
      colors: ['#000000', '#7C3A00', '#D1B78A'],
    },
    {
      id: 2,
      name: 'Voluptatem Accusantium',
      category: 'Sandals',
      price: '₹145.93',
      image: 'https://i.ibb.co/3v3DL3T/IMG-2767ss-copy-2-1.png',
      colors: ['#000000', '#D1B78A', '#EF4B4B'],
    },
    {
      id: 3,
      name: 'Voluptatem Accusantium',
      category: 'Sandals',
      price: '₹145.93',
      image: 'https://i.ibb.co/fN4B66k/IMG-2744ss-copy-2-1.png',
      colors: ['#000000', '#B68E61', '#D1B78A'],
    },
    {
      id: 4,
      name: 'Voluptatem Accusantium',
      category: 'Sandals',
      price: '₹145.93',
      image: 'https://i.ibb.co/wKhW3dX/IMG-2775ss-copy-2-1.png',
      colors: ['#000000', '#7C3A00', '#D1B78A'],
    },
    {
      id: 5,
      name: 'Voluptatem Accusantium',
      category: 'Sandals',
      price: '₹145.93',
      image: 'https://i.ibb.co/fN4B66k/IMG-2744ss-copy-2-1.png',
      colors: ['#000000', '#B68E61', '#7C3A00'],
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4 text-left">New Product</h2>

      {/* Adjust the grid layout for different screen sizes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* First Product with Image Only */}
        <div className="bg-gray-100 p-4 flex justify-center items-center">
          <img
            src={products[0].image}
            alt={products[0].name}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Other Products */}
        {products.slice(1).map((product) => (
          <div
            key={product.id}
            className="border-l p-4 flex flex-col items-center justify-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-1/2 h-auto object-contain mb-2"
            />
            <hr className="w-full border-gray-300 mb-2" />
            <p className="text-sm text-gray-500 text-center">
              {product.category}
            </p>
            <h3 className="text-md font-medium text-gray-800 mb-2 text-center">
              {product.name}
            </h3>

            {/* Color Swatches */}
            <div className="flex space-x-2 justify-center mb-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-5 h-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>

            <p className="text-lg font-bold text-gray-800">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
