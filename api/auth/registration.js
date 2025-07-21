import API from "../main";

export async function registerUser(userData) {
  return await API.post("/auth/register", userData)
    .then((response) => {
      if (response.data && response.data.token) {
        sessionStorage.setItem("token", response?.data?.token);
        return response.data;
      } else {
        throw new Error("Registration failed");
      }
    })
    .catch((error) => {
      console.error("Registration error:", error);
      throw error;
    });
}
