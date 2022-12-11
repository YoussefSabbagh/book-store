import { useLoaderData } from 'react-router-dom';

// import { useSelector } from 'react-redux';
// import {
//   selectCurrentUser,
//   selectCurrentToken,
// } from '../../features/auth/authSlice';

// import Slider from '../../components/slider';

import { SliderData } from '../../data/SliderData';
import Hero from '../../components/Hero/Hero';
import BestSellers from '../../components/bestSellers';

const Home = () => {
  const { books } = useLoaderData();

  // const user = useSelector(selectCurrentUser);
  // const token = useSelector(selectCurrentToken);

  return (
    <section className="min-h-[calc(100vh-80px)] bg-lightGray">
      <Hero id="home" slides={SliderData} />
      {/* <Slider /> */}
      <BestSellers books={books} />
    </section>
  );
};

export default Home;

export const loaderBestSellersBooks = async () => {
  const response = await fetch(
    'https://api.itbook.store/1.0/search/JavaScript'
  );
  const books = await response.json();

  return { books };
};
