import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import { useDispatch, useSelector } from 'react-redux';

import { FaBars, FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa';

import logo from '../../assets/image/logos/logo.png';
import { selectTotalQTY, setOpenCart } from '../../features/CartSlice';
import CartFinder from '../../services/api';

const Header = () => {
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const { keycloak } = useKeycloak();
  const [showMobileMenu, SetShowMobileMenu] = useState(false);

  console.log('====profile=====', keycloak.token);

  const getCart = async () => {
    try {
      const data = await CartFinder.getCart();
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  getCart();

  const handleShowToggleMenu = () => {
    SetShowMobileMenu(!showMobileMenu);
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
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
                isActive ? 'text-primary' : ' text-darkBlue hover:text-primary'
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
                  <>
                    <div className="flex gap-4 text-[#777] cursor-pointer">
                      <FaSearch />

                      {/* <div className="relative" onClick={() => setOpen(!open)}> */}
                      <div className="relative" onClick={onCartToggle}>
                        <FaShoppingCart />
                        <span className="text-xs w-4 h-4 rounded-full bg-[#2879fe] text-myWhite absolute -right-[10px] -top-2 flex justify-center items-center">
                          {totalQTY}
                        </span>
                      </div>

                      <li
                        className="text-center mt-8 md:mt-0 text-3xl md:text-base "
                        onClick={handleShowToggleMenu}
                      >
                        <NavLink
                          to={`/users/${keycloak.tokenParsed.given_name}`}
                        >
                          <div className="h-5 w-5">
                            <img
                              className="w-full h-full rounded-full"
                              src="https://lh3.googleusercontent.com/a/AEdFTp7DfU-a9BJHvp5n1h09gzHBpm42xLBwRP8FL08O=s96-c"
                              alt={keycloak.tokenParsed.given_name}
                            />
                          </div>
                        </NavLink>{' '}
                      </li>

                      <button
                        type="button"
                        className="text-blue-800"
                        onClick={() => keycloak.logout()}
                      >
                        Logout
                      </button>
                    </div>
                  </>
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
