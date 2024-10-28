"use client"


// VideoCall.js
import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { MdCallEnd, MdCall, MdVideocam, MdVideocamOff } from 'react-icons/md';
import { FiPhoneIncoming } from 'react-icons/fi';
import './Video.css';

const VideoCall = () => {
  const [users, setUsers] = useState({});
  const [userName, setUserName] = useState("");
  const [myId, setMyId] = useState("");
  const [stream, setStream] = useState(null);
  const [incomingCall, setIncomingCall] = useState(null);
  const [callerInfo, setCallerInfo] = useState(null);
  const [inCall, setInCall] = useState(false);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peerConnection, setPeerConnection] = useState(null);
  const [muted, setMuted] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const socket = useRef(io('https://eventsphare-server.onrender.com', { withCredentials: true }));
  const myVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    const enteredName = prompt("Please enter your name:");
    setUserName(enteredName);
    socket.current.emit('join', enteredName);

    socket.current.on('allUsers', (usersList) => setUsers(usersList));
    socket.current.on('callUser', handleIncomingCall);
    socket.current.on('callAccepted', handleCallAccepted);
    socket.current.on('iceCandidate', handleRemoteIceCandidate);
    socket.current.on('callEnded', handleCallEnded);

    socket.current.on('connect', () => setMyId(socket.current.id));

    return () => socket.current.disconnect();
  }, []);

  useEffect(() => {
    if (stream) {
      myVideoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    if (remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  const handleIncomingCall = ({ signal, from, name }) => {
    setIncomingCall(true);
    setCallerInfo({ from, name, signal });
  };

  const handleCallAccepted = (signal) => {
    peerConnection.setRemoteDescription(new RTCSessionDescription(signal));
  };

  const handleRemoteIceCandidate = ({ candidate }) => {
    peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
  };

  const startStream = async () => {
    try {
      const userStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStream(userStream);
    } catch (error) {
      console.error('Stream Error:', error);
    }
  };

  const initiateCall = async (userToCall) => {
    await startStream();
    const newPeerConnection = createPeerConnection(userToCall);
    setPeerConnection(newPeerConnection);

    stream.getTracks().forEach((track) => newPeerConnection.addTrack(track, stream));

    const offer = await newPeerConnection.createOffer();
    await newPeerConnection.setLocalDescription(offer);

    socket.current.emit('callUser', {
      userToCall,
      signalData: offer,
      from: myId,
    });

    setInCall(true);
  };

  const createPeerConnection = (userToCall) => {
    const pc = new RTCPeerConnection();

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.current.emit('iceCandidate', {
          to: userToCall,
          candidate: event.candidate,
        });
      }
    };

    pc.ontrack = (event) => {
      // Set the remote stream here
      setRemoteStream(event.streams[0]);
    };

    return pc;
  };

  const acceptCall = async () => {
    await startStream();

    const newPeerConnection = createPeerConnection(callerInfo.from);
    setPeerConnection(newPeerConnection);

    stream.getTracks().forEach((track) => newPeerConnection.addTrack(track, stream));

    await newPeerConnection.setRemoteDescription(new RTCSessionDescription(callerInfo.signal));

    const answer = await newPeerConnection.createAnswer();
    await newPeerConnection.setLocalDescription(answer);

    socket.current.emit('answerCall', { to: callerInfo.from, signal: answer });
    setInCall(true);
    setIncomingCall(false);
  };

  const handleEndCall = () => {
    if (peerConnection) {
      peerConnection.close();
    }
    setPeerConnection(null);
    setInCall(false);
    setRemoteStream(null);
    socket.current.emit('endCall', { userId: callerInfo ? callerInfo.from : myId });
  };

  const toggleMute = () => {
    stream.getAudioTracks().forEach((track) => (track.enabled = !track.enabled));
    setMuted(!muted);
  };

  const toggleVideo = () => {
    stream.getVideoTracks().forEach((track) => (track.enabled = !track.enabled));
    setVideoEnabled(!videoEnabled);
  };

  const handleCallEnded = () => {
    setInCall(false);
    setRemoteStream(null);
    setPeerConnection(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold">Video Call App</h1>
        <p className="text-gray-400">Connected as: {userName}</p>
      </div>
      <div className="flex gap-6">
        <video
          ref={myVideoRef}
          className="w-64 h-64 rounded-lg border-2 border-blue-500"
          autoPlay
          muted
        ></video>
        <video
          ref={remoteVideoRef}
          className="w-64 h-64 rounded-lg border-2 border-red-500"
          autoPlay
        ></video>
      </div>

      {incomingCall && (
        <div className="mt-4 flex flex-col items-center">
          <p className="text-xl">{callerInfo.name} is calling...</p>
          <button
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-2"
            onClick={acceptCall}
          >
            <FiPhoneIncoming className="mr-2" />
            Accept Call
          </button>
        </div>
      )}

      <div className="flex gap-4 mt-4">
        <button
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={() => initiateCall(Object.keys(users).find((id) => id !== myId))}
          disabled={inCall}
        >
          <MdCall className="mr-2" />
          Call
        </button>
        <button
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={handleEndCall}
          disabled={!inCall}
        >
          <MdCallEnd className="mr-2" />
          End Call
        </button>
        <button
          className="flex items-center justify-center bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
          onClick={toggleMute}
        >
          {muted ? "Unmute" : "Mute"}
        </button>
        <button
          className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
          onClick={toggleVideo}
        >
          {videoEnabled ? <MdVideocam /> : <MdVideocamOff />}
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
