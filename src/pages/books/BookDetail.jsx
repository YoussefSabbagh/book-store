import { useLoaderData, useNavigate } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import AddToCart from '../../components/AddToCart';
import StarRating from '../../components/StarRating';
import Cart from '../../components/Cart';

const BookDetail = () => {
  const { book } = useLoaderData();

  const navigate = useNavigate();

  return (
    <section className="px-4 md:px-20 py-10 relative min-h-[calc(100vh-80px)]">
      <Cart />
      <div className="absolute top-0 left-20 flex">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="rounded bg-darkBlue active:scale-90 p-0.5"
        >
          <FaArrowLeft className="w-5 h-5 text-white stroke-[2]" />
        </button>
        <span className="hidden lg:block text-base font-medium text-slate-900 ml-2">
          Regresar
        </span>
      </div>

      <h2 className="text-center text-3xl text-primary"> {book.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        <div className="w-2/3 ">
          <img
            src={book.image}
            alt={`book ${book.title}`}
            className="w-full h-auto ob"
          />
        </div>
        <div className="my-8 py-8">
          <p className="text-darkBlue font-bold text-xl mb-4">
            {book.subtitle}
          </p>
          <p className="mb-4">
            <span className="font-bold">Descripción</span>:: {book.desc}
          </p>
          <p>
            <span className="font-bold">Authors</span>: {book.authors}
          </p>
          <p className="mb-4">
            <span className="font-bold">Editorial</span>: {book.publisher}
          </p>
          <p className="mb-4">
            <span className="font-bold">ISBN</span>: {book.isbn13}
          </p>
          <p className="mb-4 flex items-center">
            <span className="font-bold mr-2">Rating:</span>{' '}
            <StarRating rating={book.rating} /> {book.rating}
          </p>
          <p className="mb-8">
            <span className="font-bold">Paginas</span>: {book.pages}
            <span className=" ml-3 font-bold">Year</span>: {book.year}
          </p>

          <p className="text-primary text-xl mb-2">Price: {book.price}</p>
          <AddToCart book={book} />
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
