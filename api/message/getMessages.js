import API from "../main";

export async function getMessageList(id, token) {
  return await API.get(`/message/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      console.error("Error fetching message list:", error);
      throw error;
    });
}
