import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          React
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/task" className="text-white hover:text-gray-300">
             Task
            </Link>
          </li>
          <li>
            <Link to="/whyme" className="text-white hover:text-gray-300">
              Why Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
