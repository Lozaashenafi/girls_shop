import axios from "../util/axios";

const authService = {
  login: async (formData) => {
    try {
      // ✅ Your backend login route is: POST /api/auth/login
      const response = await axios.post("/auth/login", formData);

      if (response.data?.token) {
        localStorage.setItem(
          "token",
          JSON.stringify({ token: response.data.token })
        );

        return {
          success: true,
          user: {
            id: response.data._id,
            fullName: response.data.fullName,
            email: response.data.email,
            role: response.data.role,
          },
          token: response.data.token,
        };
      }

      return { success: false, message: "Invalid response from server" };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};

export default authService;
