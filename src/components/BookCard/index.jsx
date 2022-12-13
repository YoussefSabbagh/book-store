import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useKeycloak } from '@react-keycloak/web';

import { FaStar } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { setAddItemToCart, setOpenCart } from '../../features/CartSlice';

const BookCard = ({ book }) => {
  const { keycloak } = useKeycloak();
  const dispatch = useDispatch();

  const onAddToCart = () => {
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
  };

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <article
      className={`relative grid items-center justify-items-center rounded-xl py-2 px-2 transition-all duration-700 ease-in-out w-full hover:scale-105 border-4 border-primary`}
    >
      <div className={`flex items-center justify-center`}>
        <img
          src={book.image}
          alt={book.title}
          className={`transitions-theme hover:-rotate-12 object-cover  `}
        />
      </div>
      <div className={`grid items-center justify-items-center text-darkBlue `}>
        <h2 className="font-bold">{book.title}</h2>
        <h2 className="">{book.subtitle}</h2>
        <div className=" flex items-center justify-between w-28 my-2">
          <p className="flex items-center bg-white/80  px-1 rounded blur-effect-theme text-black">
            {book.price}
          </p>
          <div className="flex items-center gap-1">
            <FaStar className="icon-style text-amber-400" />
            <p className="md:text-sm font-normal text-darkBlue">
              {book.rating}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {book.price !== '$0.00' && (
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-1 shadow shadow-sky-200"
              onClick={() => {
                onAddToCart();
                // onCartToggle();
              }}
            >
              <MdAddShoppingCart className="icon-style text-slate-900" />
            </button>
          )}
          <Link to={`/books/${book.isbn13}`}>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
            >
              Detalles
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
