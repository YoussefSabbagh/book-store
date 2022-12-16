import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Profile = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  return (
    <section className="relative p-8 h-[calc(100vh-80px)] bg-[#E3E6E9]">
      <div className="absolute top-0 left-20 flex">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="rounded bg-darkBlue active:scale-90 p-0.5"
        >
          <FaArrowLeft className="w-5 h-5 text-white stroke-[2]" />
        </button>
        <span className="hidden lg:block text-base font-medium text-slate-900 ml-2">
          Regresar
        </span>
      </div>

      <div className="p-8 flex flex-col border-2 border-primary rounded-xl max-w-md mx-auto">
        <h1 className="text-center mb-8 text-4xl"> Datos del Usuario</h1>
        <div className="mb-8 flex">
          <div className="mr-4">
            <img
              src={keycloak.tokenParsed.picture}
              alt={keycloak.tokenParsed.given_name}
            />
          </div>
          <div>
            <p>First Name: {keycloak.tokenParsed.given_name}</p>
            <p>Last Name: {keycloak.tokenParsed.family_name}</p>
          </div>
        </div>
        <hr />
        <hr />
        <p className="mt-3">
          <span className="font-semibold">Email:</span>{' '}
          {keycloak.tokenParsed.email}
        </p>
        <p className="mb-3">Auth: {keycloak.tokenParsed.auth_time}</p>
        <hr />
        <hr />

        <p className="font-bold mt-3"> Roles: </p>
        <ul className="flex flex-col space-x-2">
          {keycloak.tokenParsed.realm_access.roles.map((rol, i) => {
            return <li key={i}> {rol}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
