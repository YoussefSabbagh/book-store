import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../../components/BookCard';
import Cart from '../../components/Cart';
import { Search } from '../../components/Search';

const Books = () => {
  const { books } = useLoaderData();
  const [findBooks, setFindBooks] = useState(books);

  return (
    <div className="text-center">
      <Cart />
      <h1 className=" text-4xl">Cuentanos que estas buscando </h1>
      <h2 className="mb-8">Mas informacion Contactanos</h2>
      <Search setFindBooks={setFindBooks} />
      <div className="p-10 gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
        {findBooks.books.map((book) => {
          return <BookCard key={book.isbn13} book={book} />;
        })}
      </div>
    </div>
  );
};

export default Books;
// 'https://api.itbook.store/1.0/search/title=Algol'

export const loaderBooks = async () => {
  const initialLanguages = [
    'Python',
    'Java',
    'Rubi',
    'TypeScript',
    'HTML',
    'Bootstrap',
    'Angular',
    'Nodejs',
    'Nextjs',
  ];
  const i = Math.floor(Math.random() * initialLanguages.length);
  const find = initialLanguages[i];

  const response = await fetch(`https://api.itbook.store/1.0/search/${find}`);
  const books = await response.json();

  return { books };
};
