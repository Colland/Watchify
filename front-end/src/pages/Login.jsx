import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../authConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();  // Hook to navigate after login

  const handleLogin = () => {
    instance.loginPopup(loginRequest).then(response => {
      console.log('Logged in:', response);
      // Redirect to Profile page after login
      navigate('/profile');
    }).catch((error) => {
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