import { useLoaderData } from 'react-router-dom';

import { SliderData } from '../../data/SliderData';
import Hero from '../../components/Hero/Hero';
import NewBooks from '../../components/newbooks';
import Cart from '../../components/Cart';

const Home = () => {
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
