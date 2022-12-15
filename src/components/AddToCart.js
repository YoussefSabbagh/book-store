import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useKeycloak } from '@react-keycloak/web';

import { MdAddShoppingCart } from 'react-icons/md';
import { setAddItemToCart } from '../features/CartSlice';

const AddToCart = ({ book }) => {
  const { keycloak } = useKeycloak();
  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(false);

  const onAddToCart = () => {
    if (!keycloak.authenticated) {
      let confirmation = window.confirm(
        `Para Agregar al Carrito es debe estar autenticado. Quiere ingresar?`
      );
      if (confirmation) {
        keycloak.login();
      }
      return;
    }

    setProcessing(true);
    const price = parseInt(book.price.replace('$', ''));
    const item = {
      id: book.isbn13,
      title: book.title,
      text: book.subtitle,
      img: book.image,
      price: price,
      token: keycloak.token,
    };
    dispatch(setAddItemToCart(item));
    setTimeout(() => {
      setProcessing(false);
    }, 100);
  };

  return (
    <div className="flex items-center gap-3 text-white">
      {book.price !== '$0.00' && (
        <button
          type="button"
          disabled={processing}
          className=" flex  px-3 py-1 bg-slate-900 rounded   shadow shadow-sky-200 disabled:opacity-50"
          onClick={() => {
            onAddToCart();
          }}
        >
          <MdAddShoppingCart className="icon-style" /> Cart
        </button>
      )}
    </div>
  );
};

export default AddToCart;
