import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FaAngleDown,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from 'react-icons/fa';
import logo from '../../assets/image/logos/logo.png';
import flag from '../../assets/image/pictures/en_flag.png';

// import Cart from '../Cart/Cart';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  //   const products = useSelector((state) => state.cart.products);

  return (
    <header className="h-[80px] bg-darkGray">
      <div className="px-12 flex items-center justify-between">
        {/* Left side of Header */}
        <div className="flex items-center gap-6">
          <div className="w-[70px]">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center text-lg">
            <img src={flag} alt="lenguaje flag" />
            <FaAngleDown />
          </div>
          <div className="flex items-center text-lg">
            <span>USD</span>
            <FaAngleDown />
          </div>
        </div>

        {/* Right side of Header */}
        <div className="flex items-center gap-6">
          <div className="flex items-center text-lg">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="flex items-center text-lg">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="flex items-center text-lg">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="flex items-center text-lg">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="flex gap-4 text-[#777] cursor-pointer">
            <FaSearch />
            <FaUser />
            <FaHeart />
            <div className="relative" onClick={() => setOpen(!open)}>
              <FaShoppingCart />
              <span className="text-xs w-4 h-4 rounded-full bg-[#2879fe] text-myWhite absolute -right-[10px] -top-2 flex justify-center items-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* {open && <Cart />} */}
    </header>
  );
};

export default Navbar;
