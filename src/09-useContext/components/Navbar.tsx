import { Link, NavLink } from 'react-router-dom';

type Props = {};
const Navbar = (props: Props) => {
  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6 ${
              isActive ? 'border-b-2 border-blue-500' : ''
            }`
          }
        >
          home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6 ${
              isActive ? 'border-b-2 border-blue-500' : ''
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6 ${
              isActive ? 'border-b-2 border-blue-500' : ''
            }`
          }
        >
          login
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
