import React from 'react';

const UserProfile = () => {
    return (
        <div className='relative w-full bg-white bg-opacity-80 pt-6 md:pb-32 pb-56 rounded-lg shadow-lg'>
            {/* Background Image */}
            <img 
                className='w-screen px-4 rounded-lg h-[32vh] object-cover' 
                src="https://img.freepik.com/premium-photo/abstract-shadowy-textures-subtle-highlights-luminescence-seep-through-dark-background_764067-9315.jpg" 
                alt="Background"
            />
            
            {/* User Information */}
            <div className='absolute mt-[48px] md:left-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row gap-4 items-center'>
                {/* User Image */}
                <div>
                    <img 
                        className='w-32 h-32 rounded-full border-4 border-white shadow-md' 
                        src="https://i.postimg.cc/7LBHXz1c/image.png" 
                        alt="User"
                    />
                </div>

                {/* User Info */}
                <div className='flex flex-col'>
                    <div className='flex pl-3  md:flex-row md:gap-4 gap-2'>
                        <div>
                            <h2 className='text-xl font-bold'>Tauhid Hossen</h2>
                            <h3 className='text-lg text-gray-600 text-green-600'>UX / UI Designer</h3>
                        </div>
                        <div  >
                            <h2 className='text-xl'>tauhidhossen04@gmail.com</h2>
                            <h3 className='text-lg text-gray-600'>Email</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
