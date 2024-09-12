import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../authConfig';

const Login = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      <h2>Welcome to Watchify</h2>
      <p>Please sign in to continue</p>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};

export default Login;