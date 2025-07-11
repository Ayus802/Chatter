export const sendHandler = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found in localStorage");
    return;
  }
  await sendMessage(message, params?.userId, token)
    .then((response) => {
      console.log("response");
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });
};
