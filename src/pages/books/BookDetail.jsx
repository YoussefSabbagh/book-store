import { useLoaderData } from 'react-router-dom';

const BookDetail = () => {
  const { book } = useLoaderData();

  return (
    <section className="p-10">
      <h2 className="text-center text-3xl text-primary"> {book.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={book.image} alt="" />
        <div className="mt-8">
          <p className="text-darkBlue font-bold">{book.subtitle}</p>
          <p>
            <span className="font-bold">Authors</span>: {book.authors}
          </p>
          <p>Description: {book.desc}</p>
          <p>Pages: {book.pages}</p>
          <p className="text-primary">Price: {book.price}</p>
          <button
            type="button"
            className="mt-8 button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5"
          >
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;

export const loaderBookDetail = async ({ params }) => {
  const response = await fetch(
    `https://api.itbook.store/1.0/books/${params.id}`
  );

  const book = await response.json();

  return { book };
};
