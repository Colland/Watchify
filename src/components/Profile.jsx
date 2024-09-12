// src/components/Profile.jsx
import { useMsal } from '@azure/msal-react';
import { useIsAuthenticated } from '@azure/msal-react';

const Profile = () => {
  const { accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <p>You are not signed in</p>;
  }

  const account = accounts[0];
  
  return (
    <div>
      <h2>Welcome, {account.name}</h2>
      <p>Email: {account.username}</p>
    </div>
  );
};

export default Profile;