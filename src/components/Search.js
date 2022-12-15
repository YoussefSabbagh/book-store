import { useState } from 'react';
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineSearch,
} from 'react-icons/ai';

export const Search = ({ setFindBooks }) => {
  const [keySearch, setKeySearch] = useState('');
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const findBooks = async (find) => {
    const response = await fetch(
      `https://api.itbook.store/1.0/search/${find}/${currentPage}`
    );
    return await response.json();
  };

  const handleNext = () => {
    if (currentPage * 10 > data.total) {
      setCurrentPage(currentPage);
      alert('ultima pagina');
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(1);
      alert('primera pagina');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const books = await findBooks(keySearch);
    console.log(books);
    setData(books);
    if (books.total > 0) {
      setFindBooks(books);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mx-10 justify-center items-center">
        <div className=" relative flex justify-center items-center">
          <input
            type="text"
            placeholder="Buscar..."
            name="keyword"
            onChange={(e) => setKeySearch(e.target.value)}
          />
          {/* <button
            className="bg-black text-white px-4 py-2 ml-4 hover:scale-105 rounded"
            onClick={() => setCurrentPage(1)}
          >
            Nueva busqueda
          </button> */}
          <button type="submit" onClick={() => setCurrentPage(1)}>
            <AiOutlineSearch className=" absolute top-3 right-0 text-lg cursor-pointer" />
          </button>
        </div>
        {data &&
          (data.total > 0 ? (
            <div className="flex items-center mt-2">
              <button
                onClick={handlePrev}
                className=" h-6 w-6 bg-black text-white flex justify-end items-center mr-2"
              >
                <AiOutlineArrowLeft />
              </button>
              <div>
                Pagina <span className="font-semibold">{currentPage}</span> de{' '}
                {Math.ceil(data.total / 10)} de un total de{' '}
                {data.total > 1
                  ? `${data.total} libros`
                  : `${data.total} libro`}{' '}
              </div>
              <button
                onClick={handleNext}
                className=" h-6 w-6 bg-black text-white flex justify-end items-center ml-2"
              >
                <AiOutlineArrowRight />
              </button>
            </div>
          ) : (
            <h1> No hay libros con ese criterio de busqueda</h1>
          ))}
        <div className="account flexCenter">
          {/* <Card /> */}
          {/* <User /> */}
        </div>
      </div>
    </form>
  );
};
