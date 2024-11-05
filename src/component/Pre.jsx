import React from 'react'

const Pre = () => {
  return (
    <div>
          <div className="bg-white py-8">
      {/* Payment and Social Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center px-6">
  {/* Secure Payment Text and Image */}
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-6 lg:mb-0">
    <p className="text-sm font-semibold mb-4">100% Secure and Trusted Payment</p>
    <img 
      src="https://i.ibb.co/7CnZP3V/image-9-1.png"  
      alt="Payment and Social Icons" 
      className="h-12 object-contain"
    />
  </div>
</div>


      {/* Footer Legal Section */}
      <div className="border-t border-gray-300 mt-8 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center text-sm text-gray-600 px-6">
          <p>© 2023 All Rights Reserved @ Macro Footwear | <a href="#" className="underline">Terms & Conditions</a> | <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Return Policy</a></p>
          <p className="mt-4 lg:mt-0">Designed & Developed by Neegno</p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Pre
