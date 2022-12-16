import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const Pendiente = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="flex justify-center items-center min-h-[65vh]">
        <div className="bg-blue-200 p-10 rounded-xl">
          <h1 className="text-2xl mb-8">
            Lo sentimos esta página no esta lista aún
          </h1>
          <h2 className="text-xl mb-8">Ooops! Tienes que esperar :( </h2>
          <p>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className=" flex justify-between gap-2 items-center rounded bg-darkBlue active:scale-90 py-2 px-4  text-white"
            >
              <FaArrowLeft className="w-5 h-5 stroke-[2]" />
              Regresar
            </button>{' '}
          </p>
        </div>
      </section>
    </>
  );
};

export default Pendiente;
