import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <p className="text-lg font-bold mb-2">TTC LOGISTICS</p>
        <p className="text-xs sm:text-sm text-gray-400">
           &copy; {new Date().getFullYear()} TTC Logistics. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm mt-2 text-gray-400">
           Email: tinijitradingconcepts@gmail.com | Phone: +44(0) 709 116 678, +234 707 210 9281
        </p>
      </div>
  </footer>
  )
}

export default Footer;