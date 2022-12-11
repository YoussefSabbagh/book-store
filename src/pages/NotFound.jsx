import { useEffect } from 'react';
import { useRouteError, Link, useNavigate } from 'react-router-dom';
import Header from '../components/header';

const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, []);

  return (
    <>
      <Header />
      <section className="flex flex-col justity-center items-center">
        <div className="w-screen-md bg-blue-200 p-10 rounded-xl card content">
          <h1 className="text-2xl">404</h1>
          <h2 className="text-xl">Ooops! That page cannot be found :( </h2>
          <p>
            {error.status} - {error.statusText}
          </p>
          <p>
            Redirecting to the <Link to="/">Homepage</Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default NotFound;
