// import { set } from 'mongoose';
import { useState, createContext, useContext, useEffect } from 'react';

// Creating a context to store the token
export const AuthContext = createContext();

// Creating a provider component to give the token to its children
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  // Function to save the token in the browser's local storage
  const storeTokenLS = (serverToken) => {
    setToken(serverToken);
    // Save the token in local storage with the key 'token'
    return localStorage.setItem('token', serverToken);
  };

  let isLoggedIn = !!token;

  //Logout functionality

  const LogoutUser = () => {
    setToken('');
    return localStorage.removeItem('token');
  };

  //Jwt Authentication - currently logged in user data

  const userAuthentication = async () => {
    if (!token) return;
    try {
      const response = await fetch('http://localhost:4000/api/auth/user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        console.log(data);
      } else {
        console.log('Error');
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
      setUser(null);
      setToken('');
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]);

  // Return the AuthContext.Provider component
  // This makes the storeTokenLS function available to any child components
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenLS, LogoutUser, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  // Use the useContext hook to access the AuthContext
  return useContext(AuthContext);
};
