import API from "../main";

export async function getUserList(token) {
  // console.log("Fetching user list with token:", token);
  return await API.get("/user/list", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        throw new Error("Failed to fetch user list");
      }
    })
    .catch((error) => {
      console.error("Error fetching user list:", error);
      throw error;
    });
}
