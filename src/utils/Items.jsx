import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setAddItemToCart, setOpenCart } from '../../features/CartSlice';

const Items = ({ product, ifExists }) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = {
      id: product.id,
      title: product.title,
      text: product.text,
      img: product.img,
      price: product.price,
      shadow: product.shadow,
      color: product.color,
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
    <div
      className={`relative bg-gradient-to-b ${product.color} ${
        product.shadow
      } grid items-center ${
        ifExists ? 'justify-items-start' : 'justify-items-center'
      } rounded-xl py-6 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 border-4 border-yellow-400`}
    >
      <div
        className={`grid items-center justify-items-center text-slate-200 filter drop-shadow ${
          ifExists ? 'justify-items-start ' : 'justify-items-center  '
        } `}
      >
        <h2 className="font-semibold">{product.title}</h2>
        <h2 className="">{product.text}</h2>
        <div className=" flex items-center justify-between w-28 my-2">
          <p className="flex items-center bg-white/80  px-1 rounded blur-effect-theme text-black">
            $ {product.price}
          </p>
          <div className="flex items-center gap-1">
            <FaStar className="icon-style text-amber-400" />
            <p className="md:text-sm font-normal text-slate-100">
              {product.rating}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="bg-white/90 blur-effect-theme button-theme p-1 shadow shadow-sky-200"
            onClick={() => onAddToCart()}
          >
            <FaShoppingCart className="icon-style text-slate-900" />
          </button>
          <button
            type="button"
            className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
            onClick={() => {
              onAddToCart();
              onCartToggle();
            }}
          >
            {product.btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center ${
          ifExists ? 'absolute top-5 right-1' : 'mt-8 justify-center'
        } `}
      >
        <img
          src={product.img}
          alt={product.title}
          className={`transitions-theme hover:-rotate-12 ${
            ifExists
              ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]'
              : 'h-36 w-64 '
          }`}
        />
      </div>
    </div>
  );
};

export default Items;
