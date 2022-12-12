import { useSelector } from 'react-redux';

import {
  PaymentElement,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { selectTotalAmount, selectTotalQTY } from '../../features/CartSlice';
const CheckoutForm = () => {
  const totalAmount = useSelector(selectTotalAmount);
  const totalQTY = useSelector(selectTotalQTY);

  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!stripe || !elements) {
      alert('algun error');
      return;
    }
    const cardElement = elements.getElement(CardElement);
    console.log('card', cardElement);
    console.log('stripe', stripe);

    if (!error) {
      console.log('pago correcto', paymentMethod);
    } else {
      console.log('este es el errorr:', error);
    }
  };
  return (
    <section className="bg-darkGray flex flex-col items-center justify-center h-[calc(100vh-80px)]">
      <p> Cantidad de libros: {totalQTY}</p>
      <p> Monto a pagar: $ {totalAmount.toFixed(2)}</p>
      <form
        className="w-1/3 h-[50vh] border-4 border-yellow-500 "
        onSubmit={handleSubmit}
      >
        {/* <PaymentElement /> */}
        <CardElement className="m-6" />
        <button className="w-full px-4 py-2 bg-slate-800 text-white">
          Submit
        </button>
      </form>
    </section>
  );
};

export default CheckoutForm;
