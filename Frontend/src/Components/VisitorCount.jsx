import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGlobe } from 'react-icons/fa';

function GlobetrotterTracker() {
  const [count, setCount] = useState(null); 
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const res = await axios.get(`${backendUrl}/visitor-count`, { withCredentials: true });
        setCount(res.data.totalVisitors);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
        setCount(0); 
      }
    };

    fetchVisitorCount();
  }, []); 

  return (
    <div className="flex justify-center mt-2">
      <div className="bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-lg shadow-lg px-3 py-1 flex items-center">
        <span className="text-base font-medium flex justify-center items-center"><FaGlobe className='inline mr-1'/> Explorer:</span>
        <span className="ml-2 text-lg font-semibold">{count !== null ? count : "Loading..."}</span>
      </div>
    </div>
  );
}

export default GlobetrotterTracker;
