// WhyMe.js
import React from 'react';
import Layout from '../Layout';

const WhyMe = () => {
  const reasons = [
    'Decent experience in the field',
    'Strong problem-solving skills',
    'Love to build things',
    'Excellent communication skills',
    'Passion for continuous learning',
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 py-4">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold">Why Hire Me?</h1>
          <p className="text-lg mt-2">
            Here are some compelling reasons why I'm the right candidate for the job:
          </p>

          {/* Enhanced list of reasons */}
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
            {reasons.map((reason, index) => (
              <li key={index} className="mb-4 bg-white bg-opacity-20 p-4 rounded-lg shadow-lg">
                {/* Stylish reason text */}
                <div className="text-blue-200 text-xl font-semibold mb-2">{reason}</div>
                {/* Visual element (icon or image) */}
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default WhyMe;
