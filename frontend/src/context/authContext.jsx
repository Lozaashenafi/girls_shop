import { useState, useEffect, useContext, createContext } from "react";
import getAuth from "../util/authHeader";
// create auth context
const AuthContext = createContext();
// prepare auth provider
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(userData);
  const fetchData = async () => {
    try {
      const loggedInUser = await getAuth();
      if (loggedInUser.token) {
        setIsLoggedIn(true);
        const { id, firstName, role, token } = loggedInUser;
        setUserData({
          id,
          firstName,
          role,
          token,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    fetchData,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// useAuth
export const useAuth = () => {
  return useContext(AuthContext);
};
