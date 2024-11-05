import React from 'react';

const Icon = () => {
  const icons = [
    {
      id: 1,
      image: 'https://i.ibb.co/SP2K99D/headphones-1.png', // Replace with your actual icon URL
      title: '24/7 Support',
    },
    {
      id: 2,
      image: 'https://i.ibb.co/yFRZg9B/refund-2-1.png', // Replace with your actual icon URL
      title: '100% Refund',
    },
    {
      id: 3,
      image: 'https://i.ibb.co/QkMfcRq/quality-1-1.png', // Replace with your actual icon URL
      title: 'Quality Inspection',
    },
  ];

  return (
    <div className="container mx-auto mt-6 grid grid-cols-1 md:grid-cols-3  border-t border-b py-6 dm:p-4">
      {icons.map((icon) => (
        <div 
          key={icon.id} 
          className="flex flex-col items-center space-y-2 text-center border p-4 "
        >
          <img src={icon.image} alt={icon.title} className="w-12 h-12 object-contain" />
          <p className="text-lg font-medium text-gray-700">{icon.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Icon;
