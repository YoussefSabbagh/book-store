import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { selectTotalAmount } from '../../features/CartSlice';

import { CheckoutForm } from '../../components/stripe/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const totalAmount = useSelector(selectTotalAmount);
  const navigate = useNavigate();

  return (
    <section className="bg-white flex flex-col justify-center items-center w-full h-[calc(100vh-80px)]   ">
      <button
        className="bg-indigo-300 px-4 py-3 mb-8 rounded cursor-pointer hover:scale-105"
        onClick={() => navigate(-1)}
      >
        Regresar al Carrito
      </button>
      <Elements stripe={stripePromise}>
        <CheckoutForm totalAmount={totalAmount} />
      </Elements>
    </section>
  );
};

export default Checkout;
