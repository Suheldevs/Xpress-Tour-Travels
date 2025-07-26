import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Testimonials() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
     }, []);
  return (
    <div>
      <h1 className="breadcrumb relative md:pt-32 pt-24 pb-12 font-bold text-center  text-white">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 md:text-5xl text-3xl">What Our Clients Say</div>
        <div className="relative z-10 text-lg mt-2 text-secondary">
          <Link to="/" className="text-white hover:text-secondary hover:cursor-pointer">
            Home /
          </Link>{" "}
           Testimonials
        </div>
      </h1>

      {loading && (
        <div className="w-full bg-slate-50 py-10 px-6 flex flex-wrap gap-4 justify-center">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-400 animate-pulse w-80 h-40 rounded-md"
            ></div>
          ))}
        </div>
      )}

      {!error ? (
           <div className="flex justify-center items-center p-4 py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-100">

<iframe
         src="https://widget.tagembed.com/294015?website=1"
          className="w-full min-h-screen my-8 bg-slate-50 px-6"
          onLoad={handleLoad}
          onError={handleError}
          style={loading ? { display: 'none' } : {}}
          title="Xpress Tour & Travels reviews"
        ></iframe>
         </div>
      
      ) : (
        <div className="w-full text-center my-8">
          <p className="text-red-500 text-lg font-bold">
            Unable to load testimonials at the moment. Please try again later.
          </p>
        </div>
      )}
    </div>
  );
}

export default Testimonials;
