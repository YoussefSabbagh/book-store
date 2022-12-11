import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

import { FaBars, FaTimes } from 'react-icons/fa';

import logo from '../../assets/image/logos/logo.png';

const Header = () => {
  const { keycloak } = useKeycloak();
  const [showMobileMenu, SetShowMobileMenu] = useState(false);

  const handleShowToggleMenu = () => {
    SetShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="w-full h-[80px] py-0 px-8 sticky top-0 md:px-20 z-10 flex justify-between items-center bg-lightGray text-darkBlue ">
      <div className="w-[70px]">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="flex justify-between items-center">
        <ul
          className={`list-none flex justify-center items-center text-center ease-in-out duration-300 uppercase mobileMenu md:desktopMenu ${
            showMobileMenu ? 'opacity-100 left-0' : 'md:left-0'
          }`}
        >
          <li
            className="text-center mt-8 md:mt-0 text-3xl md:text-base text-darkBlue "
            onClick={handleShowToggleMenu}
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-primary' : ' text-myWhite hover:text-primary'
              }
            >
              Home
            </NavLink>
          </li>
          <li
            className="text-center mt-8 md:mt-0 text-3xl md:text-base "
            onClick={handleShowToggleMenu}
          >
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? 'text-primary' : ' text-darkBlue hover:text-primary'
              }
            >
              Books
            </NavLink>
          </li>
          <li
            className="text-center mt-8 md:mt-0 text-3xl md:text-base "
            onClick={handleShowToggleMenu}
          >
            <NavLink
              to="/users/:user_id"
              className={({ isActive }) =>
                isActive ? 'text-primary' : ' text-darkBlue hover:text-primary'
              }
            >
              Profile
            </NavLink>{' '}
          </li>
          <li
            className="text-center mt-8 md:mt-0 text-3xl md:text-base "
            onClick={handleShowToggleMenu}
          >
            {/* <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'text-primary' : ' text-darkBlue hover:text-primary'
              }
            >
              Login
            </NavLink> */}

            <div className="hidden xl:flex items-center space-x-5">
              <div className="hover:text-gray-200">
                {!keycloak.authenticated && (
                  <button
                    type="button"
                    className="text-blue-800"
                    onClick={() => keycloak.login()}
                  >
                    Ingreso
                  </button>
                )}

                {!!keycloak.authenticated && (
                  <button
                    type="button"
                    className="text-blue-800"
                    onClick={() => keycloak.logout()}
                  >
                    Logout ({keycloak.tokenParsed.preferred_username})
                  </button>
                )}
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div
        className="text-2xl cursor-pointer md:hidden"
        onClick={handleShowToggleMenu}
      >
        {showMobileMenu ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
