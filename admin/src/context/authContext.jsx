import { useState, useEffect, useContext, createContext } from "react";
import getAuth from "../util/authHeader";
import authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const loggedInUser = await getAuth();
      if (loggedInUser.token) {
        setIsLoggedIn(true);
        setIsAdmin(loggedInUser.role === "ADMIN");
        setUserData(loggedInUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handle login
  const login = async (formData) => {
    const result = await authService.login(formData);
    if (result.success) {
      await fetchData(); // refresh context with user info
    }
    return result;
  };

  // handle logout
  const logout = () => {
    authService.logout();
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUserData({});
  };

  const values = {
    isLoggedIn,
    isAdmin,
    userData,
    setUserData,
    setIsLoggedIn,
    setIsAdmin,
    login,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
