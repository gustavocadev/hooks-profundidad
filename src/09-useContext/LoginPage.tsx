import { useContext } from 'react';
import { UserContext } from './context/user/UserContext';
type Props = {};
const LoginPage = (props: Props) => {
  const { email, name, id } = useContext(UserContext);
  return (
    <>
      <h1>Login Page</h1>
      {name} - {id} - {email}
    </>
  );
};
export default LoginPage;
