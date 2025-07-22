import { jwtDecode } from "jwt-decode";
import API from "../main";

export async function loginUser(values) {
  return await API.post("/auth/login", values)
    .then((response) => {
      if (response.data && response.data.token) {
        sessionStorage.setItem("token", response.data.token, {
          expires: 36, // Set token expiration time in seconds
        });
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
