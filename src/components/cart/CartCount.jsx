import React from 'react';
import { BiChevronsLeft } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';

const CartCount = ({ onCartToggle, totalQTY, onClearCartItems }) => {
  return (
    <>
      <div className="bg-lightGray h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
        <div className="flex items-center gap-3">
          <div
            className="grid items-center cursor-pointer"
            onClick={onCartToggle}
          >
            <BiChevronsLeft className="w-5 h-5 text-slate-900 hover:text-orange-500 " />
          </div>
          <div className="grid items-center">
            <p className="text-base font-medium text-slate-900">
              Your Cart{' '}
              <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-sm">
                ({totalQTY} Items)
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-base font-medium text-slate-900 mr-2">
            Clear Cart
          </span>
          <button
            type="button"
            onClick={onClearCartItems}
            className="rounded bg-theme-cart active:scale-90 p-0.5"
          >
            <FaTimes className="w-5 h-5 text-white stroke-[2]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
