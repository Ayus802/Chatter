import { useSocket } from "@/context/socketContext";

export const useReceiveMessages = (setMessages) => {
  const { socket } = useSocket();
  socket.on("message", (message) => {
    console.log("Received message:", message);
    setMessages((prevMessages) => [...prevMessages, message]);
  });
};
