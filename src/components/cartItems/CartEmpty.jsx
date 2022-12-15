import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import emptybag from '../../assets/image/pictures/emptybag.png';

const CartEmpty = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-center flex-col h-screen px-11 text-center gap-7">
        <img
          src={emptybag}
          alt="emptybag/img"
          className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
        />
        <button
          type="button"
          className="button-theme bg-lightGray  flex items-center justify-center text-primary py-2 gap-3 px-5  active:scale-110"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="w-5 h-5 text-primary" />
          <span className="">Regresar</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
