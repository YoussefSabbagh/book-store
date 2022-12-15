import { useKeycloak } from '@react-keycloak/web';

const Profile = () => {
  const { keycloak } = useKeycloak();

  return (
    <section className="p-8 h-[calc(100vh-80px)] bg-indigo-200">
      <div className="p-8 flex flex-col border-2 border-primary rounded-xl max-w-md mx-auto">
        <h1 className="text-center mb-8 text-4xl"> Datos del Usuario</h1>
        <div className="mb-8 flex">
          <div className="mr-4">
            <img src={keycloak.tokenParsed.picture} alt="avatar" />
          </div>
          <div>
            <p>First Name: {keycloak.tokenParsed.given_name}</p>
            <p>Last Name: {keycloak.tokenParsed.family_name}</p>
          </div>
        </div>
        <p>Email: {keycloak.tokenParsed.email}</p>
        <p>Auth: {keycloak.tokenParsed.auth_time}</p>

        <hr />
        <hr />
        <p className="font-bold"> Roles: </p>
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
