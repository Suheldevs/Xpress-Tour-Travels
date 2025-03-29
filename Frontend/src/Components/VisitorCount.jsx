import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGlobe } from 'react-icons/fa';

function GlobetrotterTracker() {
  const [count, setCount] = useState('0');

  const fetchVisitorCount = async () => {
    try {
      const res = await axios.get(`https://db.drmanasaggarwal.com/express/vistor-count`, { withCredentials: true });
      setCount(res.data.totalVisitors);
    } catch (error) {
      setCount('0');
    }
  };

  useEffect(() => {
    fetchVisitorCount()
  },[])

  return (
    <div className="flex justify-center mt-2">
      <div className="bg-gradient-to-r from-blue-500 to-green-600 text-white rounded-lg shadow-lg px-3 py-1 flex items-center">
        <span className="text-base font-medium flex justify-center items-center">
          <FaGlobe className="inline mr-1" /> Explorer:
        </span>
        <span className="ml-2 text-lg font-semibold">{count !== null ? count : "0"}</span>
      </div>
    </div>
  );
}

export default GlobetrotterTracker;
