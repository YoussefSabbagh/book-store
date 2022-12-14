import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useKeycloak } from '@react-keycloak/web';

import {
  selectCartItems,
  selectTotalQTY,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from '../features/CartSlice';
import CartCount from '../components/cart/CartCount';
import CartEmpty from '../components/cart/CartEmpty';
import CartItem from '../components/cart/CartItem';
import CartSumary from '../components/cart/CartSumary';

const Cart = () => {
  const dispatch = useDispatch();
  const { keycloak } = useKeycloak();
  const cartItems = useSelector(selectCartItems);
  const totalQTY = useSelector(selectTotalQTY);

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
    <>
      <div className={`w-full h-screen grid grid-cols-1 md:grid-cols-2`}>
        <div className="">
          <div>
            {cartItems?.length === 0 ? (
              <CartEmpty onCartToggle={onCartToggle} />
            ) : (
              <div>
                <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                  {cartItems?.map((item, i) => (
                    <CartItem key={i} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
          <div>
            <CartCount
              totalQTY={totalQTY}
              onCartToggle={onCartToggle}
              onClearCartItems={onClearCartItems}
            />
            <CartSumary />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
