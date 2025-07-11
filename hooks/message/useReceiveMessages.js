const { useSocket } = require("../../context/socketContext");

export const receiveMessages = (setMessages) => {
  const { socket } = useSocket();
  socket.on("message", (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  });
};
