import React from 'react';
import toast from 'react-hot-toast';

const Top = () => {
     const handleClick =(interest)=>{
        toast.success(`${interest} Successfully Added as your interest!`)
     }
    return (
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 h-full flex flex-col ">
            <div className="text-2xl font-semibold text-gray-800 mb-6 text-center">Choose Your Interests</div>
            <div className="flex flex-wrap justify-center gap-4">
                <button onClick={()=>handleClick('Architecture')} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Architecture
                </button>
                <button onClick={()=>handleClick('Beauty')} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Beauty
                </button>
                <button onClick={()=>handleClick('Business')} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Business
                </button>
                <button onClick={()=>handleClick(' Car')} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Car
                </button>
                <button onClick={()=>handleClick(' Communication')} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Communication
                </button>
                <button onClick={()=>handleClick('Education')} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Education
                </button>
            </div>
        </div>
    );
};

export default Top;
