import { Link, useLoaderData } from 'react-router-dom';

const Books = () => {
  const { books } = useLoaderData();

  return (
    <div className="text-center">
      <h1 className=" text-4xl">BOOKS </h1>
      {books.books.map((book) => {
        return (
          <div key={book.isbn13}>
            <div className="px-10 py-4 cursor-pointer hover:text-blue-500">
              <p className="font-bold text-xl">{book.title}</p>
              <p>{book.subtitle}</p>
              <p>{book.price}</p>
            </div>
            <button>
              <Link to={`/books/${book.isbn13}`}>ver Detalle</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Books;

export const loaderBooks = async () => {
  const response = await fetch('https://api.itbook.store/1.0/search/mongodb');
  const books = await response.json();

  return { books };
};
