import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <article className="border-red-400 border bg-slate-100 pb-8">
      <img src={book.image} alt={book.title} />
      <div className="px-10 py-4 cursor-pointer hover:text-blue-500 ">
        <p className="font-bold text-lg">{book.title}</p>
        <p>{book.subtitle}</p>
        <p>{book.price}</p>
      </div>
      <button
        type="button"
        className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5"
      >
        <Link className="text-myWhite" to={`/books/${book.isbn13}`}>
          ver Detalle
        </Link>
      </button>
    </article>
  );
};

export default BookCard;
