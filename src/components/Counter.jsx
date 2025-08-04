import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.5,      
  });

  const [counterKey, setCounterKey] = useState(0);

 
  useEffect(() => {
    if (inView) {
      setCounterKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">What We've Achieved</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Over the years, our library has grown into a trusted hub of knowledge and learning.
        These numbers reflect our commitment to accessible, quality service.
      </p>

      <div ref={ref} className="flex   gap-6 flex-wrap items-center">
        <div className="bg-white px-8 py-4 rounded-xl shadow-lg flex flex-col items-center w-90 ml-4 md:w-70">
          <span className="text-4xl  bg-orange-100 text-orange-500 p-1 rounded-lg">📚</span>
          <h3 className="text-xl font-semibold mt-2">Books</h3>
          <h1 className="text-3xl font-bold text-blue-600 mt-1">
            <CountUp
              key={counterKey}
              start={0}
              end={1200}
              duration={4}
            />+
          </h1>
        </div>
        <div className="bg-white px-8 py-4 rounded-xl shadow-lg flex flex-col items-center w-90 ml-4 md:w-70">
          <span className="text-4xl  bg-blue-100 text-blue-500 p-1 rounded-lg">👥</span>
          <h3 className="text-xl font-semibold mt-2">Registered Users</h3>
          <h1 className="text-3xl font-bold text-blue-600 mt-1">
            <CountUp
              key={counterKey}
              start={0}
              end={2500}
              duration={4}
            />+
          </h1>
        </div>
        <div className="bg-white px-8 py-4 rounded-xl shadow-lg flex flex-col items-center w-90 ml-4 md:w-70">
          <span className="text-4xl bg-rose-100 text-rose-500 p-1 rounded-lg">🔄</span>
          <h3 className="text-xl font-semibold mt-2">Book Issues Completed</h3>
          <h1 className="text-3xl font-bold text-blue-600 mt-1">
            <CountUp
              key={counterKey}
              start={0}
              end={3500}
              duration={4}
            />+
          </h1>
        </div>
        <div className="bg-white px-8 py-4 rounded-xl shadow-lg flex flex-col items-center w-90 ml-4 md:w-70">
          <span className="text-4xl bg-green-100 text-green-500 p-1 rounded-lg">💡</span>
          <h3 className="text-xl font-semibold mt-2">Daily Visitors</h3>
          <h1 className="text-3xl font-bold text-blue-600 mt-1">
            <CountUp
              key={counterKey}
              start={0}
              end={80}
              duration={4}
            />+
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Counter;
