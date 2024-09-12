import { useEffect, useState } from 'react';
import axios from 'axios';

const UserPreferences = () => {
  const [preferences, setPreferences] = useState({
    favoriteGenres: '',
    preferredLanguage: '',
    receiveNotifications: false,
  });

  const fetchPreferences = async () => {
    try {
      // Replace with your API endpoint
      const response = await axios.get('/api/user/preferences');
      setPreferences(response.data);
    } catch (error) {
      console.error('Error fetching preferences:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = async () => {
    try {
      // Replace with your API endpoint
      await axios.post('/api/user/preferences', preferences);
      alert('Preferences updated successfully');
    } catch (error) {
      console.error('Error saving preferences:', error);
    }
  };

  useEffect(() => {
    fetchPreferences();
  }, []);

  return (
    <div>
      <h1>User Preferences</h1>
      <form>
        <div>
          <label htmlFor="favoriteGenres">Favorite Genres:</label>
          <input
            type="text"
            id="favoriteGenres"
            name="favoriteGenres"
            value={preferences.favoriteGenres}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="preferredLanguage">Preferred Language:</label>
          <input
            type="text"
            id="preferredLanguage"
            name="preferredLanguage"
            value={preferences.preferredLanguage}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="receiveNotifications">Receive Notifications:</label>
          <input
            type="checkbox"
            id="receiveNotifications"
            name="receiveNotifications"
            checked={preferences.receiveNotifications}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default UserPreferences;
