import React, { useState } from 'react';
import Layout from '../Layout';

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to My Awesome App(Scroll Down)</h1>
          <p className="text-lg mt-2">Check the task section for evaluation</p>
          <p className="text-lg mt-2">Check About and Why Me section to know more about me</p>
          
          {/* Display the counter value and buttons */}
          <div className="mt-4">
            <h2 className="text-2xl">Counter Value: {count}</h2>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md mx-2" onClick={increment}>
              Increment
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md mx-2" onClick={decrement}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
