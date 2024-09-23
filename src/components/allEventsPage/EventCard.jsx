import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className=" rounded overflow-hidden shadow-lg bg-white m-4">
            <img className="w-full h-48 object-cover" src={event.photo} alt={event.title} />
            <div className="p-4">
                <h2 className="text-xl font-bold">{event.title}</h2>
                <p className="text-gray-700">{event.dateTime}</p>
                <p className="text-gray-700">Hosted by: {event.companyName}</p>
                <p className="text-gray-600">Location: {event.location}</p>
                <div className="my-2">
                    {event.tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-blue-500 text-white text-xs font-bold rounded-full px-2 py-1 mr-2">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-gray-600">Organizer: {event.organizer.name} ({event.organizer.followers} Followers)</p>
                <p className="text-gray-500 my-2 ">{event.description}</p>
                <div className='flex justify-between items-center '>
                    <p className="text-lg font-semibold">{event.price}</p>
                    <button className="  bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                        {event.button}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
