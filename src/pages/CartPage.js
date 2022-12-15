import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useKeycloak } from '@react-keycloak/web';

import {
  selectCartItems,
  selectTotalAmount,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from '../features/CartSlice';

import CartEmpty from '../components/cartItems/CartEmpty';
import CartItem from '../components/cartItems/CartItem';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { keycloak } = useKeycloak();
  const cartItems = useSelector(selectCartItems);
  const totalQTY = useSelector(selectTotalQTY);
  const totalAmount = useSelector(selectTotalAmount);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    const token = keycloak.token;
    dispatch(setClearCartItems(token));
  };

  return (
    <div className={'w-full px-8 md:px-20'}>
      <h1 className="p-8 text-center text-4xl text-darkBlue">
        Su carrito de compra
      </h1>
      <div className="grid grid-cols-1 md:gap-8 lg:grid-cols-2">
        {cartItems?.length === 0 ? (
          <CartEmpty onCartToggle={onCartToggle} />
        ) : (
          <div>
            <div className="w-full flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[80vh] scroll-smooth scroll-hidden py-3">
              {cartItems?.map((item, i) => (
                <CartItem key={i} item={item} />
              ))}
            </div>
          </div>
        )}

        <div className=" relative w-full  flex flex-col justify-center items-center order-first lg:order-last">
          <div className="absolute top-0 left-20">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="rounded bg-darkBlue active:scale-90 p-0.5"
            >
              <FaArrowLeft className="w-5 h-5 text-white stroke-[2]" />
            </button>
            <span className="hidden lg:block text-base font-medium text-slate-900 mr-2">
              Regresar
            </span>
          </div>

          <div className="absolute top-0 right-20">
            <span className="hidden lg:block text-base font-medium text-slate-900 mr-2">
              Remover Todos
            </span>
            <button
              type="button"
              onClick={onClearCartItems}
              className="rounded bg-darkBlue active:scale-90 p-0.5"
            >
              <FaTrash className="w-5 h-5 text-white stroke-[2]" />
            </button>
          </div>

          <h2 className="text-2xl mt-8 mb-8 "> Resumen de la Compra</h2>

          <div className=" uppercase w-full md:w-3/4 px-5 py-2 grid items-center">
            <div className="flex items-center justify-between mb-4">
              <p className="">Cantidad</p>
              <p className=" ">
                {totalQTY} {totalQTY > 1 ? 'unidades' : 'unidad'}
              </p>
            </div>
            <div className="flex items-center justify-between font-semibold mb-8">
              <p className="">SubTotal</p>
              <p className="">${totalAmount.toFixed(2)}</p>
            </div>
            <Link to="/checkout">
              <div className="grid items-center gap-2">
                <button
                  type="button"
                  className="button-theme bg-darkBlue text-white mb-8"
                >
                  Pagar
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
