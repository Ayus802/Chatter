import { jwtDecode } from "jwt-decode";
import API from "../main";

export async function loginUser(values) {
  return await API.post("/auth/login", values)
    .then((response) => {
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        const user = jwtDecode(response.data.token);
        return user;
      } else {
        throw new Error("Login failed");
      }
    })
    .catch((error) => {
      console.error("Login error:", error);
      throw error;
    });
}

export default loginUser;
