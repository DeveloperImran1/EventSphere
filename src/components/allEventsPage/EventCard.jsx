import { FaHeart, FaShareAlt, FaClock, FaMapMarkerAlt, FaTag, FaUserFriends, FaBuilding } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the required styles

const EventCard = ({ event, addToCart, shareEvent, }) => {
    return (
        <div>
            {/* Toast container to show toasts */}
            <ToastContainer />
            <div className="relative group rounded-lg overflow-hidden shadow-lg bg-white m-4 ">
                <img className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300" src={event?.photo} alt={event?.title} />

                {/* Love and Share Icons - visible on hover */}
                <div className="absolute top-36 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <button
                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700"
                        onClick={() => {
                            addToCart(event);
                            toast.success(`${event.title} added to cart!`);
                        }}
                    >
                        <FaHeart />
                    </button>
                    <button
                        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
                        onClick={() => {
                            shareEvent(event);
                            toast.info('Sharing options opened!');
                        }}
                    >
                        <FaShareAlt />
                    </button>
                </div>

                <div className="p-4">
                    <h2 className="text-xl font-bold">{event?.title}</h2>
                    <div className="flex items-center text-gray-700 my-1">
                        <FaClock className="mr-2" />
                        <p>{event.dateTime}</p>
                    </div>
                    <div className="flex items-center text-gray-700 my-1">
                        <FaBuilding className="mr-2" />
                        <p>Hosted by: {event.companyName}</p>
                    </div>
                    <div className="flex items-center text-gray-600 my-1">
                        <FaMapMarkerAlt className="mr-2" />
                        <p>{event.location}</p>
                    </div>
                    <div className="flex items-center text-gray-600 my-1">
                        <FaTag className="mr-2" />
                        <p>category: {event.category}</p>
                    </div>
                    <div className="my-2">
                        {event.tags?.map((tag, index) => (
                            <span key={index} className="inline-block bg-blue-500 text-white text-xs font-bold rounded-full px-2 py-1 mr-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className=" text-gray-600 mb-5">
                        <div className='flex items-center'>
                            <FaUserFriends className="mr-2" />
                            <p>speaker: <span className='font-bold'>{event.organizer.name} {event.organizer.followers}</span> Followers</p>
                        </div>
                        <p className="text-gray-500 "><span className='font-bold'>bio:</span> {event.organizer.bio}</p>
                    </div>
                    <div className='flex justify-between items-center'>

                        <button className="bg-[--color-logo] text-white py-2 px-8 rounded-lg hover:bg-green-600 transition">
                            {event.price}
                        </button>
                        <button className="bg-[--color-logo] text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
                           Buy Ticket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
