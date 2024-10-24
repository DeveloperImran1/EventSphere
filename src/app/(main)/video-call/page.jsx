import VideoCall from '@/components/VideoCall/VideoCall';
import React from 'react';

const VideoChat = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10' >
           
           <div className='mt-10' >
            
            <VideoCall></VideoCall>
            
            </div>  
             
        </div>
    );
};

export default VideoChat;