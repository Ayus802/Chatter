const { useAuth } = require("@/context/authContext");
const { useSocket } = require("@/context/socketContext");
const { useEffect } = require("react");

export const useReceiveMessage = (setMessages) => {
  const { socket } = useSocket();
  const { setIsAuthenticated } = useAuth();

  useEffect(() => {
    if (!socket) return;
    socket.on("message", (message) => {
      console.log("Listening for incoming messages...", message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { message: message, senderId: message?.senderId },
      ]);
    });

    return () => socket.off("message");
  }, [socket, setMessages]);
};
