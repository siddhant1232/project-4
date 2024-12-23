import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // inteval set karna hai
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-[50vh] -translate-y-1.5">
      <div className="text-center">
        {/* <h1 className="text-sm font-medium mb-1 text-black">Current Time</h1> */}
        <p className="text-base text-black">{time}</p>
      </div>
    </div>
  );
};

export default Clock;
