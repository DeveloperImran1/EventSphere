import { TbFidgetSpinner } from 'react-icons/tb';

const Beorganiger = () => {
    return (
        <div className='md:w-[calc(100vw-310px)] z-0'>
            <div className='w-[80%] md:max-w-[45%] mx-auto'>
                <div className='mt-2'>
                    <p className='text-2xl text-gray-500'>
                        Please fillup all the input fields before becoming a
                        Organizer
                    </p>
                </div>
                <hr className='mt-8 ' />

                <form>
                    <label className="block mb-3">
                        <span className="mb-1">Company Name</span>
                        <input type="text" placeholder="ABC Limited" name='companyName' className="block w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100 " />
                    </label>
                    <label className="block mb-3">
                        <span className="mb-1">Location</span>
                        <input type="text" placeholder="Dhaka, Banassri" name='location' className="block w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100 " />
                    </label>
                    <label className="block mb-3">
                        <span className="mb-1">Website</span>
                        <input type="text" placeholder="www.eventsphare.com" name='website' className="block w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100 " />
                    </label>
                    <label className="block mb-3">
                        <span className="mb-1">Phone Number</span>
                        <input type="number" placeholder="Your Phone Number" name='phoneNumber' className="block w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100 " />
                    </label>

                    <label className="block mb-3">
                        <span className="mb-1">Short Description</span>
                        <input type="text" placeholder="Short Description" name='description' className="block w-full   rounded-tr-lg rounded-bl-lg hover:rounded-md shadow-sm focus:ring focus:ring-opacity-75 border-2 border-[#5A5A5D] p-2 focus:dark:ring-violet-600 dark:bg-gray-100 " />
                    </label>

                    <label className="block mb-3">
                        <div className=" inputbox">
                            <select className="custom-select " required>
                                <option disabled selected value="">Select Category</option>
                                <option value="conference">Conference</option>
                                <option value="workshop">Workshop</option>
                                <option value="seminar">Seminar</option>
                                <option value="webinar">Webinar</option>
                                <option value="exhibition">Exhibition</option>
                                <option value="festival">Festival</option>
                            </select>
                        </div>

                    </label>


                    <hr className='mb-8 ' />
                    <div className='flex mt-2 justify-around'>
                        <button
                            type='submit'
                            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                        >
                            {/* {loading ? <TbFidgetSpinner className='animate-spin m-auto' /> : 'Continue'} */}
                            Continue
                        </button>
                        <button
                            type='button'
                            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                        >
                            Cancel
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Beorganiger;