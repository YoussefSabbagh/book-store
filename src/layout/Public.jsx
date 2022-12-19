import { Outlet, useNavigation } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import Footer from '../components/footer';
import Header from '../components/header';

const Public = () => {
  const navigation = useNavigation();
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    keycloak.token && localStorage.setItem('token', keycloak.token);
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <main className="bg-lightGray">
        {navigation.state === 'loading' && (
          <div className="text-xl text-red-600">Cargando</div>
        )}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Public;
