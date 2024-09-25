"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import eventsDataJson from "@/components/allEventsPage/EventDataJson";
import { FaRegClock, FaMapMarkerAlt, FaUserFriends, FaEnvelope, FaPhoneAlt, FaTag, FaBuilding } from "react-icons/fa";
import Image from "next/image";
// import EventCard from "@/components/allEventsPage/EventCard";

const EventDetailsPage = ({ params }) => {
    const router = useRouter();
    const { id } = params;
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const foundEvent = eventsDataJson.find((event) => event.id === parseInt(id));
            setEvent(foundEvent);
            setLoading(false);
        }
    }, [id]);

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    if (!event) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-bold">Event Not Found</h2>
                <p className="mt-2">We couldn't find the event you're looking for.</p>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Side: Image, Gallery, Reviews */}
                <section className="space-y-6">
                    {/* Event Image */}
                    <img className="w-full h-80 object-cover rounded-lg" src={event.photo} alt={event.title} />

                    {/* Event Gallery */}
                    {event.gallery && event.gallery.length > 0 && (
                        <article>

                            <div className="grid grid-cols-2 gap-4">
                                {event.gallery.map((image, index) => (
                                    <img key={index} className="w-full h-32 object-cover rounded-lg" src={image} alt={`Gallery image ${index + 1}`} />
                                ))}
                            </div>
                        </article>
                    )}

                    {/* Event Reviews */}
                    {event.reviews && event.reviews.length > 0 && (
                        <article>
                            <h3 className="text-xl font-semibold mb-2">Reviews</h3>
                            <ul className="space-y-3 flex gap-4">
                                {event.reviews.map((review, index) => (
                                    <div key={index} className=" italic rounded-md shadow-xl lg:p-10 p-5  w-72 ">
                                        <h3 className="">{review.name}</h3>
                                        <p className="">{review.review}</p>
                                    </div>
                                ))}
                            </ul>
                        </article>
                    )}
                    {/* Contact Information */}
                    <article className="border-t pt-4">
                        <h3 className="text-xl font-semibold">Contact Information</h3>
                        <p className="mt-2">
                            <FaEnvelope className="inline mr-1" />
                            Email: <a href={`mailto:${event.contactInfo.email}`} className="text-blue-500">{event.contactInfo.email}</a>
                        </p>
                        <p>
                            <FaPhoneAlt className="inline mr-1" />
                            Phone: <a href={`tel:${event.contactInfo.phone}`} className="text-blue-500">{event.contactInfo.phone}</a>
                        </p>
                    </article>

                    {/* location map  */}
                    <section>
                        <h3>Event location map </h3>
                        <Image src={event.locationMap} alt="map" width={320} height={400} className="object-cover rounded-xl"/>
                    </section>

                </section>


                {/* Right Side: Event Data */}
                <section className="space-y-5 px-4">
                    <h2 className="text-3xl font-bold">{event.title}</h2>
                    <p className="text-gray-600">
                        <FaRegClock className="inline mr-1" />
                        {new Date(event.dateTime).toLocaleString()}
                    </p>
                    <p className="text-gray-600">
                        <FaBuilding className="inline mr-1" />
                        Hosted by: {event.companyName}
                    </p>
                    <p className="text-gray-600">
                        <FaMapMarkerAlt className="inline mr-1" />
                        Location: {event.location}
                    </p>
                    <div className="flex items-center text-gray-600 my-1">
                        <FaTag className="mr-2" />
                        <p>category: {event.category}</p>
                    </div>
                    {/* Tags Section */}
                    <article>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {event.tags.map((tag, index) => (
                                <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                                    <FaTag className="inline mr-1" />
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </article>

                    <p className="mt-4 text-gray-800">{event.description}</p>

                    {/* Organizer Information */}
                    <article className="border-t pt-4">
                        <h3 className="text-xl font-semibold">Speaker</h3>
                        <div className="flex items-center mt-3">
                            <img className="w-20 h-20 rounded-full" src={event.organizer.photo || "/default-profile.png"} alt={event.organizer.name} />
                            <div className="ml-4">
                                <p className="font-bold">{event.organizer.name}</p>
                                <p className="text-gray-600">
                                    <FaUserFriends className="inline mr-1" />
                                    {event.organizer.followers} Followers
                                </p>
                                <p className="text-gray-600 mt-1">{event.organizer.bio}</p>
                            </div>
                        </div>
                    </article>

                    {/* sponsor  */}
                    <div>
                        <h3>Sponsor</h3>
                        <div className="flex gap-4 items-center">
                            <img src={event.sponsor.logo} alt="sponsor logo" className="object-cover w-20 h-20 " />
                            <h3 className="font-bold">{event.sponsor.name} </h3>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <article>
                        <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
                        <ul className="space-y-4">
                            {event.faqs.map((faq, index) => (
                                <li key={index}>
                                    <div className="collapse collapse-arrow shadow-lg rounded-md">
                                        <input type="radio" name="my-accordion-2" defaultChecked />
                                        <div className="collapse-title text-xl font-medium">{faq.question} </div>
                                        <div className="collapse-content">
                                            <p>{faq.answer} </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </article>


                    {/* Event Price and Button */}
                    <div className="flex justify-between items-center mt-6">
                        <p className="font-bold text-white text-xl bg-[--color-logo] px-5 py-2 rounded-lg">${event.price} <span className="text-sm">USD</span></p>
                        <button className="bg-[--color-logo] text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
                            Buy Ticket
                        </button>
                    </div>


                </section>
            </div>

            {/* <EventCard/> */}
        </div>
    );
};

export default EventDetailsPage;
