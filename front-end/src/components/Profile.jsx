import { useMsal } from '@azure/msal-react';
import { useIsAuthenticated } from '@azure/msal-react';
import UserPreferences from "./UserPreferences";

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

      <UserPreferences />
    </div>
  );
};

export default Profile;
