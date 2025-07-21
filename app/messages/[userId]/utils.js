const { useSocket } = require("@/context/socketContext");

async function MakeVideoCall(userId){
    const {socket}  = useSocket()
    const pc = new RTCPeerConnection()
    const offer = await pc.createAnswer()
    pc.setLocalDescription(offer)
    socket.to(userId).emit("video-call", {offer})
    await socket.on("video-call-accepted", async ({answer}) => {
        await pc.setRemoteDescription(answer)
        console.log("Video call accepted", answer);
    })
}

async function AcceptVideoCall(userId, offer){
    const {socket} = useSocket();
    socket.on("video-call", async ({offer}) => {
        const pc = new RTCPeerConnection();
        pc.setRemoteDescription(offer);
        const answer = await pc.createAnswer();
        pc.setLocalDescription(answer);
        socket.to(userId).emit("video-call-accepted", {answer});

    })
}