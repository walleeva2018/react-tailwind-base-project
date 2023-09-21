import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 p-4 text-center">
        &copy; {new Date().getFullYear()} Zubair Ahmed Rafi
      </footer>
    </div>
  );
};

export default Layout;
