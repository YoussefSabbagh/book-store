import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import { useSelector } from 'react-redux';

import { FaBars, FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa';

import logo from '../../assets/image/logos/logo.png';
import { selectTotalQTY } from '../../features/CartSlice';
import CartFinder from '../../services/api';

const Header = () => {
  const totalQTY = useSelector(selectTotalQTY);

  const { keycloak } = useKeycloak();
  const [showMobileMenu, SetShowMobileMenu] = useState(false);

  // console.log('====profile=====', keycloak.token);

  const getCart = async () => {
    const token = keycloak.token;
    try {
      await CartFinder.getCart(token);
    } catch (error) {
      console.error(error.message);
    }
  };

  getCart();

  const handleShowToggleMenu = () => {
    SetShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="w-full h-[80px] py-0 px-8 sticky top-0 md:px-20 z-10 flex justify-between items-center bg-lightGray text-darkBlue ">
      <div className="flex justify-between w-full">
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
                  isActive
                    ? 'text-primary'
                    : ' text-darkBlue hover:text-primary'
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
                  isActive
                    ? 'text-primary'
                    : ' text-darkBlue hover:text-primary'
                }
              >
                Books
              </NavLink>
            </li>

            {!keycloak.authenticated && (
              <li
                className="text-center mt-8 md:mt-0 text-3xl md:text-base "
                onClick={handleShowToggleMenu}
              >
                <button
                  type="button"
                  className="text-darkBlue hover:text-primary uppercase"
                  onClick={() => keycloak.login()}
                >
                  Ingresar
                </button>
              </li>
            )}

            {!!keycloak.authenticated && (
              <li
                className="text-center mt-8 md:mt-0 text-3xl md:text-base "
                onClick={handleShowToggleMenu}
              >
                <button
                  type="button"
                  className="text-darkBlue hover:text-primary uppercase"
                  onClick={() => keycloak.logout()}
                >
                  Salir
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>

      <div className="flex justify-between items-center">
        {!!keycloak.authenticated && (
          <div className="flex items-center mx-4 md:mr-0">
            <div className="flex justify-between items-center space-x-5  text-[#777] cursor-pointer">
              <FaSearch />

              {/* <div className="relative" onClick={() => setOpen(!open)}> */}
              <div className="relative">
                <NavLink
                  to={`/checkout/${keycloak.tokenParsed.given_name}`}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-primary'
                      : ' text-darkBlue hover:text-primary'
                  }
                >
                  <FaShoppingCart />
                  <span className="text-xs w-4 h-4 rounded-full bg-[#2879fe] text-myWhite absolute -right-[10px] -top-2 flex justify-center items-center">
                    {totalQTY}
                  </span>
                </NavLink>
              </div>

              <NavLink to={`/users/${keycloak.tokenParsed.given_name}`}>
                <div className="h-8 w-8">
                  <img
                    className="w-full h-full rounded-full"
                    src="https://lh3.googleusercontent.com/a/AEdFTp7DfU-a9BJHvp5n1h09gzHBpm42xLBwRP8FL08O=s96-c"
                    alt={keycloak.tokenParsed.given_name}
                  />
                </div>
              </NavLink>
            </div>
          </div>
        )}

        <div
          className="text-2xl cursor-pointer md:hidden"
          onClick={handleShowToggleMenu}
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
