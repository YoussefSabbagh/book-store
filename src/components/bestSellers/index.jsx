import BookCard from '../../components/BookCard';

const BestSellers = ({ books }) => {
  return (
    <div className="text-center">
      <h1 className=" mt-8 text-4xl">Best Sellers </h1>
      <div className="p-10 gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8">
        {books.books.map((book) => {
          return <BookCard key={book.isbn13} book={book} />;
        })}
      </div>
    </div>
  );
};

export default BestSellers;
