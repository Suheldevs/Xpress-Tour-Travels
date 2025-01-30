import React, { useEffect, useState } from 'react';
import { db, ref, onValue, set } from '../firebase';  // Firebase functions import

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countRef = ref(db, 'visitorCount');
    
    // Listen for changes to visitorCount in Realtime Database
    onValue(countRef, (snapshot) => {
      if (snapshot.exists()) {
        setCount(snapshot.val());  // Update state with the latest visitor count
      } else {
        set(countRef, 1);  // Initialize the counter to 1 if no value exists
      }
    });

    // Cleanup on component unmount
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  const incrementCount = () => {
    const countRef = ref(db, 'visitorCount');
    set(countRef, count + 1);  // Increment the visitor count by 1
  };

  return (
    <div className='text-center mt-1'>
      <div className=' bg-white rounded inline py-1 px-4 text-black'>Visitors: <span className=' font-bold'> {count}</span></div>
      {/* <button onClick={incrementCount}>Increment Count</button> */}
    </div>
  );
};

export default VisitorCounter;
