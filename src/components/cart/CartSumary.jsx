import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectTotalAmount } from '../../features/CartSlice';

const CartSumary = () => {
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-semibold uppercase">SubTotal</h1>
        <h1 className="text-sm rounded bg-darkBlue text-slate-100 px-1 py-0.5">
          ${totalAmount.toFixed(2)}
        </h1>
      </div>
      <Link to="/checkout">
        <div className="grid items-center gap-2">
          <p className="text-sm font-medium text-center">
            Taxes and Shipping Will Calculate At Shipping
          </p>
          <button type="button" className="button-theme bg-darkBlue text-white">
            Check Out
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CartSumary;
