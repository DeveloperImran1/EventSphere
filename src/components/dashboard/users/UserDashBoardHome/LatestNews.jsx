import React from 'react';

const LatestNews = () => {
    return (
        <div className="bg-gray-100 py-8 w-full max-w-md  mx-start">
            <h2 className="text-2xl font-bold bg-white p-6 shadow-md rounded-t-lg text-green-500  text-start">Our Latest News</h2>
            <div className="  ">
                {/* News Card 1 */}
                <div className="max-w-md md:flex bg-white shadow-md  overflow-hidden p-6">
                    <img 
                        src="https://i.postimg.cc/hvmfLY04/dag3.jpg" 
                        alt="News" 
                        className="w-1/3 md:w-1/3 h-20 md:h-auto object-cover rounded-md mb-4 md:mb-0"
                    />
                    <div className="md:flex-1 md:ml-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Collection of textile samples</h3>
                        <p className="text-gray-600">I shared this on my fb wall a few months back, and I thought.</p>
                    </div>
                </div>

                {/* News Card 2 */}
                <div className="max-w-md  md:flex bg-white shadow-md  overflow-hidden p-6">
                    <img 
                        src="https://i.postimg.cc/wMY6pjhH/download.jpg" 
                        alt="News" 
                        className="w-1/3  md:w-1/3 h-20  md:h-auto object-cover rounded-md mb-4 md:mb-0"
                    />
                    <div className="md:flex-1 md:ml-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Collection of textile samples</h3>
                        <p className="text-gray-600">I shared this on my fb wall a few months back, and I thought.</p>
                    </div>
                </div>

                {/* News Card 3 */}
                <div className="max-w-md  md:flex bg-white shadow-md rounded-b-lg overflow-hidden p-6">
                    <img 
                        src="https://i.postimg.cc/WzmfM1FF/download-1.jpg" 
                        alt="News" 
                        className="w-1/3  md:w-1/3 h-20  md:h-auto object-cover rounded-md mb-4 md:mb-0"
                    />
                    <div className="md:flex-1 md:ml-6">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Collection of textile samples</h3>
                        <p className="text-gray-600">I shared this on my fb wall a few months back, and I thought.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;
