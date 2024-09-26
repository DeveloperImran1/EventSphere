import React from 'react';

const ImageSection = () => {
    return (
        <div className="max-w-md mx-start mt-4 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Interest</h2>
                <div className="grid grid-cols-3 gap-2">
                    <div>
                        <img 
                            src="https://i.postimg.cc/zGZD1SVh/3-a3b71ee57f864d4c050f.jpg" 
                            alt="Interest 1" 
                            className="w-full h-24 object-cover rounded-md"
                        />
                    </div>
                    <div>
                        <img 
                            src="https://i.postimg.cc/5tP61QcM/4-7e62fca01912d6ac0356.jpg" 
                            alt="Interest 2" 
                            className="w-full h-24 object-cover rounded-md"
                        />
                    </div>
                    <div>
                        <img 
                            src="https://i.postimg.cc/x8ZZSR5b/2-41f2237f0e2c931f54d2.jpg" 
                            alt="Interest 3" 
                            className="w-full h-24 object-cover rounded-md"
                        />
                    </div>
                    <div>
                        <img 
                            src="https://i.postimg.cc/5tP61QcM/4-7e62fca01912d6ac0356.jpg" 
                            alt="Interest 4" 
                            className="w-full h-24 object-cover rounded-md"
                        />
                    </div>
                    <div>
                        <img 
                            src="https://i.postimg.cc/zGZD1SVh/3-a3b71ee57f864d4c050f.jpg" 
                            alt="Interest 5" 
                            className="w-full h-24 object-cover rounded-md"
                        />
                    </div>
                    <div>
                        <img 
                            src="https://i.postimg.cc/x8ZZSR5b/2-41f2237f0e2c931f54d2.jpg" 
                            alt="Interest 6" 
                            className="w-full h-24 object-cover rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSection;
