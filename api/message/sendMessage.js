import API from "../main";

export function sendMessage(messageData, id, token) {
  return API.post(
    `/message/${id}`,
    {
      message: messageData,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => {
      if (response.data) {
        return response.data;
      } else {
        throw new Error("Failed to send message");
      }
    })
    .catch((error) => {
      console.error("Error sending message:", error);
      throw error;
    });
}
