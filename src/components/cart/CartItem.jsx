import React from 'react';
import { useDispatch } from 'react-redux';
import { useKeycloak } from '@react-keycloak/web';

import { FaMinus, FaPlus, FaRegTrashAlt } from 'react-icons/fa';
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from '../../features/CartSlice';

const CartItem = ({
  item: { product, title, subtitle, image, price, qty },
}) => {
  const dispatch = useDispatch();
  const { keycloak } = useKeycloak();

  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        product,
        title,
        subtitle,
        image,
        price,
        qty,
        token: keycloak.token,
      })
    );
  };

  const onIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        product,
        title,
        subtitle,
        image,
        price,
        qty,
        token: keycloak.token,
      })
    );
  };
  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        product,
        title,
        subtitle,
        image,
        price,
        qty,
        token: keycloak.token,
      })
    );
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-4 ">
          <div
            className={`bg-theme relative rounded p-1 hover:scale-105 transition-all duration-75 ease-in-out grid items-center min-w-[9rem]`}
          >
            <img
              src={image}
              alt={`img/cart-item/${product}`}
              className="w-32 h-auto object-cover"
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-darkBlue text-myWhite text-xs px-1 rounded">
              ${price}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h2 className="font-semibold text-lg text-slate-900 lg:text-sm">
                {title}
              </h2>
              <p className="text-sm text-slate-700 lg:text-xs">{subtitle}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                onClick={onDecreaseItemQTY}
                className="bg-darkBlue rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <FaMinus className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
              <div className="bg-darkBlue rounded text-white font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">
                {qty}
              </div>
              <button
                type="button"
                onClick={onIncreaseItemQTY}
                className="bg-darkBlue rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center active:scale-90"
              >
                <FaPlus className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-4">
          <div className="grid items-center justify-center">
            <p className="text-lg lg:text-base text-slate-900 font-medium">
              ${(price * qty).toFixed(2)}
            </p>
          </div>
          <div className="grid items-center justify-center">
            <button
              type="button"
              className="bg-darkBlue rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer"
              onClick={onRemoveItem}
            >
              <FaRegTrashAlt className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
