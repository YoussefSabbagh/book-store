import { useEffect, useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    setStripePromise(loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY));
  }, []);

  useEffect(() => {
    fetch('/create-payment-intent', {
      method: 'POST',
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
