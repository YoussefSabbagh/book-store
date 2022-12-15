import { useLoaderData } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import { useDispatch } from 'react-redux';

import { SliderData } from '../../data/SliderData';
import Hero from '../../components/Hero/Hero';
import NewBooks from '../../components/newbooks';
import Cart from '../../components/Cart';
import { useEffect } from 'react';
import CartFinder from '../../services/api';
import { setLoadCart } from '../../features/CartSlice';

const Home = () => {
  const { keycloak } = useKeycloak();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!keycloak.authenticated) {
      sessionStorage.removeItem('cart');
    } else {
      if (!sessionStorage.getItem('cart')) {
        const getCart = async () => {
          const token = keycloak.token;
          try {
            const data = await CartFinder.getCart(token);
            sessionStorage.setItem('cart', JSON.stringify(data.products));
            dispatch(setLoadCart(data.products));
          } catch (error) {
            console.error(error.message);
          }
        };

        getCart();
      }
    }
  }, [dispatch, keycloak.authenticated, keycloak.token]);

  const { books } = useLoaderData();

  return (
    <section className="min-h-[calc(100vh-80px)] bg-lightGray">
      <Cart />
      <Hero id="home" slides={SliderData} />
      <NewBooks books={books} />
    </section>
  );
};

export default Home;
