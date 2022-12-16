import { useLocation, Navigate, Outlet, useNavigation } from 'react-router-dom';

import { useKeycloak } from '@react-keycloak/web';
import Header from '../components/header';

const RequireAuth = () => {
  const { keycloak } = useKeycloak();
  const navigation = useNavigation();
  const location = useLocation();

  return (
    <>
      <Header />
      <main className="bg-lightGray">
        {navigation.state === 'loading' && (
          <div className="text-xl text-red-600">Cargando</div>
        )}
        {keycloak.authenticated ? (
          <Outlet />
        ) : (
          <Navigate to="/" state={{ from: location }} replace />
        )}
      </main>
      {/* <Footer /> */}
    </>
  );
};
export default RequireAuth;
