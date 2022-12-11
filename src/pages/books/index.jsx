import { useLoaderData } from 'react-router-dom';
import BookCard from '../../components/BookCard';

const Books = () => {
  const { books } = useLoaderData();

  return (
    <div className="text-center">
      <h1 className=" text-4xl">BOOKS </h1>
      <div className="p-10 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
        {books.books.map((book) => {
          return <BookCard key={book.isbn13} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Books;

export const loaderBooks = async () => {
  const response = await fetch('https://api.itbook.store/1.0/search/java');
  const books = await response.json();

  return { books };
};
