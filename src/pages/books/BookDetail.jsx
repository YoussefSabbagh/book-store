import { useLoaderData, useNavigate } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';

import { FaArrowLeft } from 'react-icons/fa';
import AddToCart from '../../components/AddToCart';
import StarRating from '../../components/StarRating';

const BookDetail = () => {
  const { book } = useLoaderData();

  const navigate = useNavigate();

  return (
    <section className="p-10 relative">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={book.image} alt="" />
        <div className="mt-8">
          <p className="text-darkBlue font-bold">{book.subtitle}</p>
          <p>
            <span className="font-bold">Authors</span>: {book.authors}
          </p>
          <p className="mt-4">
            <span className="font-bold">Descripción</span>:: {book.desc}
          </p>
          <p className="mt-4">
            <span className="font-bold">Editorial</span>:: {book.publisher}
          </p>
          <p className="mt-4">
            <span className="font-bold">ISBN</span>: {book.isbn13}
          </p>
          <p className="mt-4 flex items-center">
            <span className="font-bold mr-2">Rating:</span>{' '}
            <StarRating rating={book.rating} /> {book.rating}
          </p>
          <p>
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
