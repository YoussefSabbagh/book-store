import { useLoaderData } from 'react-router-dom';

const Profile = () => {
  const { user } = useLoaderData();

  return (
    <div>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* <div>
        <img src={user.avatar} />
      </div> */}
    </div>
  );
};

export default Profile;

export const loaderUserById = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.user_id}`
  );

  const user = await response.json();

  return { user };
};
