import React from 'react';

const Subscriber = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
            <div className="text-xl font-semibold text-gray-800 mb-4">Your Subscribers</div>
            <div className="flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-200">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src="https://via.placeholder.com/50" alt="Subscriber" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="font-bold text-gray-800 text-xl text-start">Crafts Corner</h2>
                        <h2 className="text-gray-600 text-xl text-start">823K Subscribers</h2>
                    </div>
                </div>
                {/* Add more subscribers here if needed */}
            </div>
        </div>
    );
};

export default Subscriber;
