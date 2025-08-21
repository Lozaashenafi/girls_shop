import { message } from "antd";
import axios from "../util/axios";

const authService = {
  login: async (formData) => {
    try {
      const response = await axios.post("user/login", formData);
      if (response.data.success) {
        localStorage.setItem(
          "token",
          JSON.stringify({ token: response.data.token })
        );
        // localStorage.setItem("token", response.data.token);
        return { success: true, message: "login successfully" };
      }
    } catch (error) {
      return { success: false, message: error.response.data.message };
    }
  },
  forgetPassword: (data) => {},
};
export default authService;
