'use client'


import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback ,AvatarImage} from "@/components/ui/avatar"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Mic, MicOff, Phone, PhoneOff, Video, VideoOff } from 'lucide-react'
import io from "socket.io-client"
import Swal from 'sweetalert2';

const socket = io("https://eventsphare-server.onrender.com", {
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  transports: ['websocket']
});
export default function VideoCall() {
  const [users, setUsers] = useState({})
  const [name, setName] = useState("")
  const [callAccepted, setCallAccepted] = useState(false)
  const [callEnded, setCallEnded] = useState(false)
  const [stream, setStream] = useState(null)
  const [call, setCall] = useState({})
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [callDuration, setCallDuration] = useState(0)
  const [mediaError, setMediaError] = useState(null)
  const [isConnected, setIsConnected] = useState(false)


  const myVideo = useRef()
  const userVideo = useRef()
  const connectionRef = useRef()
  const callTimerRef = useRef(null)


  // Message for Join now
  useEffect(() => {
    Swal.fire({
      title: '🎉JOIN NOW !',
      text: 'Please enter your name before joining !',
      icon: 'warning',
      confirmButtonText: 'Got it!',
    });
  }, []);


  // Add missing joinRoom function
  const joinRoom = () => {
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    socket.emit("join", name.trim());
  };


  useEffect(() => {
    // Socket connection status handlers
    socket.on("connect", () => setIsConnected(true));
    socket.on("disconnect", () => setIsConnected(false));
   
    // Update users list
    socket.on("allUsers", (updatedUsers) => {
      setUsers(updatedUsers);
    });


    socket.on("error", (error) => {
      toast.error(error);
    });


    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("allUsers");
      socket.off("error");
    };
  }, []);


//Audio & Video on/of condition 


  useEffect(() => {
    const initializeMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false
        });
        setStream(mediaStream);
        if (myVideo.current) {
          myVideo.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error("Error accessing media devices:", error);
        setMediaError(error.name);
        toast.error(`Media access error: ${error.message}`);
      }
    };


    initializeMedia();


    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);


  useEffect(() => {
    if (!socket) return;


    socket.on("callUser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });


    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      startCallTimer();
      connectionRef.current.setRemoteDescription(new RTCSessionDescription(signal))
        .catch(err => console.error("Error setting remote description:", err));
    });


    socket.on("callEnded", () => {
      handleCallEnd();
    });


    socket.on("iceCandidate", ({ candidate }) => {
      if (connectionRef.current && candidate) {
        connectionRef.current.addIceCandidate(new RTCIceCandidate(candidate))
          .catch(err => console.error("Error adding ICE candidate:", err));
      }
    });


    return () => {
      socket.off("callUser");
      socket.off("callAccepted");
      socket.off("callEnded");
      socket.off("iceCandidate");
    };
  }, []);


  const createPeerConnection = () => {
    const peer = new RTCPeerConnection({
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
        {
          urls: 'turn:numb.viagenie.ca',
          username: 'webrtc@live.com',
          credential: 'muazkh'
        }
      ]
    });


    peer.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("iceCandidate", {
          to: call.from || call.to,
          candidate: event.candidate,
        });
      }
    };


    peer.ontrack = (event) => {
      console.log("Received remote track", event.streams[0]);
      if (userVideo.current) {
        userVideo.current.srcObject = event.streams[0];
      }
    };


    // Important: Add all tracks before creating offer/answer
    if (stream) {
      stream.getTracks().forEach(track => {
        peer.addTrack(track, stream);
      });
    }


    peer.oniceconnectionstatechange = () => {
      console.log("ICE Connection State:", peer.iceConnectionState);
    };


    return peer;
  };


  const answerCall = async () => {
    try {
      setCallAccepted(true);
      const peer = createPeerConnection();
      connectionRef.current = peer;


      await peer.setRemoteDescription(new RTCSessionDescription(call.signal));
      const answer = await peer.createAnswer();
      await peer.setLocalDescription(answer);


      socket.emit("answerCall", {
        signal: peer.localDescription,
        to: call.from,
      });


      startCallTimer();
    } catch (err) {
      console.error("Error answering call:", err);
      toast.error("Failed to establish connection");
      handleCallEnd();
    }
  };


  const callUser = async (id) => {
    try {
      const peer = createPeerConnection();
      connectionRef.current = peer;


      const offer = await peer.createOffer();
      await peer.setLocalDescription(offer);


      socket.emit("callUser", {
        userToCall: id,
        signalData: peer.localDescription,
        from: socket.id,
        name
      });


      setCall({ to: id });
    } catch (err) {
      console.error("Error calling user:", err);
      toast.error("Failed to initiate call");
    }
  };






  // ... (rest of the component remains the same)


  const handleCallEnd = () => {
    setCallEnded(true)
    setCallAccepted(false)
    if (callTimerRef.current) {
      clearInterval(callTimerRef.current)
    }
    if (connectionRef.current) {
      connectionRef.current.close()
    }
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
    }
    socket.emit("endCall", { userId: call.from || call.to })
    window.location.reload()
  }


  const toggleMute = () => {
    if (!stream) return
    const audioTrack = stream.getAudioTracks()[0]
    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled
      setIsMuted(!audioTrack.enabled)
    }
  }


  const toggleVideo = () => {
    if (!stream) return
    const videoTrack = stream.getVideoTracks()[0]
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled
      setIsVideoOff(!videoTrack.enabled)
    }
  }


  const startCallTimer = () => {
    setCallDuration(0)
    callTimerRef.current = setInterval(() => {
      setCallDuration(prev => prev + 1)
    }, 1000)
  }


  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }


  return (
    <div className="container  mx-auto  px-4">
    <ToastContainer position="top-right" autoClose={5000} />
   
    {/* Join Card */}
    <Card className="max-w-md mx-auto mb-8  shadow-lg">
      <CardHeader className=" rounded-t-xl bg-gradient-to-r   from-blue-500 to-blue-400">
        <CardTitle className="text-white flex items-center ">


          <span>Join Video Call</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex space-x-2">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="focus-visible:ring-blue-500"
          />
          <button
            onClick={joinRoom}
            className="button"
          >
            Join
          </button>
        </div>
      </CardContent>
    </Card>


    {/* Video Grid */}
    <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mb-8">
      {/* My Video Card */}
      <Card className="shadow-lg ">
        <CardHeader className="bg-gradient-to-r  from-gray-100 to-gray-200">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-10 w-10">
           
                  <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yCMBpekD57G4-5FTZcs2CiZUbspx-hA6mQ&s" alt="user 1" />
               
                </Avatar>
             
              <span className="text-xl" >{name || 'You'} (Me)</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative aspect-video bg-gray-900 rounded-b-lg overflow-hidden">
            {mediaError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <p className="text-white text-lg text-center px-6">
                  {mediaError === "NotAllowedError"
                    ? "Please allow access to camera and microphone"
                    : "Error accessing media devices"}
                </p>
              </div>
            ) : (
              <video playsInline muted ref={myVideo} autoPlay className="w-full h-full object-cover" />
            )}
            {isVideoOff && !mediaError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 space-y-2">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="text-2xl">{name?.[0] || '?'}</AvatarFallback>
                </Avatar>
                <p className="text-white text-lg">Video Off</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      {/* Remote Video Card */}
      <Card className="shadow-lg">
        <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
            <Avatar className="h-10 w-10">
           
            <AvatarImage src="https://media.licdn.com/dms/image/D4D22AQFdzKgfoBGjmA/feedshare-shrink_2048_1536/0/1722914742765?e=2147483647&v=beta&t=1a_qeffsiGRpPDvFbVSKNBV-QKbXZKRNnVCdaLbMGUo" alt="user 2" />
         
          </Avatar>
              <span className="text-xl">{call.name || 'Remote User'}</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative aspect-video bg-gray-900 rounded-b-lg overflow-hidden">
            <video playsInline ref={userVideo} autoPlay className="w-full h-full object-cover" />
            {!callAccepted && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 space-y-4">
               
                <p className="text-white text-lg">Waiting for connection...</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>


    {/* Call Controls */}
    {callAccepted && !callEnded && (
      <Card className=" mb-8 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg font-semibold text-green-600">Call in progress</p>
            <p className="text-xl text-gray-800 font-mono bg-green-100 px-3 py-1 rounded-full">
              {formatDuration(callDuration)}
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <Button
              onClick={toggleMute}
              variant={isMuted ? "destructive" : "secondary"}
              disabled={!stream}
              className="w-14 h-14 rounded-full"
            >
              {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </Button>
            <Button
              onClick={toggleVideo}
              variant={isVideoOff ? "destructive" : "secondary"}
              disabled={!stream}
              className="w-14 h-14 rounded-full"
            >
              {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
            </Button>
            <Button
              onClick={handleCallEnd}
              variant="destructive"
              className="w-14 h-14 rounded-full"
            >
              <PhoneOff className="w-6 h-6" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )}


    {/* Incoming Call */}
    {call.isReceivingCall && !callAccepted && (
      <Card className="max-w-md mx-auto mb-8 shadow-lg border-2 border-green-500 animate-pulse">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
           
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yCMBpekD57G4-5FTZcs2CiZUbspx-hA6mQ&s" alt="user 1" />
         
          </Avatar>
              <div>
                <h3 className="text-lg font-semibold">Incoming Call</h3>
                <p className="text-gray-500">{call.name || 'Unknown Caller'}</p>
              </div>
            </div>
            <Button
              onClick={answerCall}
              disabled={!stream}
              className="bg-green-500 hover:bg-green-600"
            >
              <Phone className="mr-2 h-4 w-4" /> Answer
            </Button>
          </div>
        </CardContent>
      </Card>
    )}


    {/* Available Users */}
    <Card className="   shadow-2xl    ">
      <CardHeader className="bg-[#1b85db] rounded-t-xl">
        <CardTitle className="flex items-center ">
     
          <span  className="text-yellow-50 text-2xl font-semibold">Available Users</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        {Object.entries(users).length === 0 ? (
          <div className="flex flex-col items-center justify-center py-4 px-4">
         
            <h3 className="text-xl font-semibold text-gray-600 mb-1">No Users Available</h3>
            <p className="text-gray-500 text-center">
              Waiting for other users to join the room...
            </p>
          </div>
        ) : (
          <ul className="divide-y-2 divide-green-200">
            {Object.entries(users).map(([id, user]) => (
              <li key={id} className="flex items-center justify-between py-2 px-6 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-xl font-semibold">{user.name}</span>
                </div>
                <Button
                  onClick={() => callUser(id)}
                  size="sm"
                  disabled={user.inCall || !stream || id === socket.id}
                  className={`${
                    id === socket.id
                      ? 'bg-gray-400'
                      : user.inCall
                      ? 'bg-yellow-500 hover:bg-yellow-600'
                      : 'bg-blue-500 hover:bg-blue-600'
                  }`}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {id === socket.id ? 'You' : user.inCall ? 'In Call' : 'Call'}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  </div>
  )
}
