import api from "../util/axios";

// Login request
export const loginRequest = async (email, password) => {
  try {
    const res = await api.post("/auth/login", { email, password });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};

// Register request (optional, if you need signup)
export const registerRequest = async (userData) => {
  try {
    const res = await api.post("/auth/register", userData);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};

// Logout request (optional — only if backend has logout route)
export const logoutRequest = async () => {
  try {
    const res = await api.post("/auth/logout");
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Logout failed" };
  }
};
