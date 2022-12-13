import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export const Search = ({ setFindBooks }) => {
  const [keySearch, setKeySearch] = useState('');

  const findBooks = async (find) => {
    const response = await fetch(`https://api.itbook.store/1.0/search/${find}`);
    return await response.json();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const books = await findBooks(keySearch);
    setFindBooks(books);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex mx-10 justify-center items-center">
        <div className=" relative flex justify-center items-center">
          <input
            type="text"
            placeholder="Buscar..."
            name="keyword"
            onChange={(e) => setKeySearch(e.target.value)}
          />
          <button type="submit">
            <AiOutlineSearch className="absolute top-3 right-0 text-lg cursor-pointer" />
          </button>
        </div>
        <div className="account flexCenter">
          {/* <Card /> */}
          {/* <User /> */}
        </div>
      </div>
    </form>
  );
};
