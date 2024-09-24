


import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <img src={user.picture} alt={user.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-center mb-4">{user.name}</h2>
      <div className="space-y-2">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Email verified:</strong> {user.email_verified ? 'Yes' : 'No'}</p>
        {user.nickname && <p><strong>Nickname:</strong> {user.nickname}</p>}
        {user.locale && <p><strong>Locale:</strong> {user.locale}</p>}
        <p><strong>Last Update:</strong> {new Date(user.updated_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Profile;



