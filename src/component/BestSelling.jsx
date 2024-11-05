import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const BestSelling = () => {
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
      category: 'Sandals',
      name: 'Voluptatem Accusantium',
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
      <h2 className="text-xl font-semibold mb-4 text-left">Best Selling</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 hover:border-green-900 p-4 flex flex-col items-center justify-center space-y-6 relative transition-all duration-200" // Added hover border color
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-1/3 h-auto object-contain mb-4"
            />

            {/* Horizontal line with hover effect */}
            <div className="w-full flex items-center justify-center">
              <hr className="w-full border-t border-gray-300 mb-2" />
              <span className="absolute text-center text-transparent hover:bg-black hover:text-white py-1 px-4 rounded transition-all duration-200 ease-in-out cursor-pointer flex items-center space-x-2">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                <span>Add to Cart</span>
              </span>
            </div>

            {/* Product name */}
            <h3 className="text-md font-medium text-gray-800 text-center">
              {product.name}
            </h3>
            
            {/* Category */}
            <p className="text-sm text-gray-500 w-full text-center">{product.category}</p>

            {/* Color swatches */}
            <div className="flex space-x-2 justify-center mb-2">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-5 h-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>

            {/* Price */}
            <p className="text-lg font-bold text-gray-800">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
