// File: GoogleLoginButton.js

import React from 'react';
import { GoogleAuth } from 'google-auth-library';

const GoogleLoginButton = () => {
  const clientID = 'YOUR_CLIENT_ID'; // Replace with your actual Client ID
  const googleAuth = new GoogleAuth({
    client_id: clientID,
    scope: 'profile email',
  });

  const handleLogin = async () => {
    try {
      await googleAuth.signIn();
      const user = googleAuth.currentUser.get();
      console.log('Logged in:', user.getBasicProfile().getName());
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <button onClick={handleLogin}>
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
