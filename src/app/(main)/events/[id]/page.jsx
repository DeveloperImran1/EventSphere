// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaRegClock, FaMapMarkerAlt, FaUserFriends, FaEnvelope, FaPhoneAlt, FaTag, FaBuilding } from "react-icons/fa";
// import Image from "next/image";
// import { MdLocationCity } from "react-icons/md";
// import { LucideFileType2 } from "lucide-react";
// import Loading from "@/components/shared/LoadingSpiner/Loading";
// import Link from "next/link";

// const EventDetailsPage = ({ params }) => {
//     const router = useRouter();
//     const { id } = params;
//     const [event, setEvent] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchEventsData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:9000/events/${id}`);
//                 setEvent(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching event data:", error);
//                 setLoading(false);
//             }
//         };

//         fetchEventsData();

//     }, [id]);

//     if (loading) {
//         return < Loading />;
//     }

//     if (!event) {
//         return (
//             <div className="text-center mt-20">
//                 <h2 className="text-2xl font-bold">Event Not Found</h2>
//                 <p className="mt-2">We could not find the event you are looking for.</p>
//             </div>
//         );
//     }

//     return (
//         <div className="w-11/12 mx-auto my-20">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Left Side: Image, Gallery, Reviews */}
//                 <section className="space-y-6">
//                     {/* Event Image */}
//                     <Image
//                         src={event?.gallery[0]}
//                         alt={event.title}
//                         layout="responsive"
//                         objectFit="cover"
//                         width={500}
//                         height={400}
//                         className="w-full h-80 object-cover rounded-lg hover:scale-105 transition-all duration-300" />

// {/* Event Gallery */}
// {event.gallery && event.gallery.length > 0 && (
//     <article>
//         <div className="grid grid-cols-2 gap-4">
//             {event?.gallery?.slice(1,3)?.map((image, index) => (
//                 <div key={index} className="relative aspect-w-1 aspect-h-1 h-32">
//                     <Image
//                         src={image}
//                         alt={`Gallery image ${index + 1}`}
//                         layout="fill"
//                         objectFit="cover"
//                         className="hover:shadow-2xl hover:scale-105 rounded-lg transition-all duration-300"
//                     />
//                 </div>
//             ))}
//         </div>
//     </article>
// )}


//                     {/* Event Reviews */}
//                     {event.reviews && event.reviews.length > 0 && (
//                         <article>
//                             <h3 className="text-xl font-semibold mb-2">Reviews</h3>
//                             <ul className="space-y-3 flex gap-4">
//                                 {event.reviews.map((review, index) => (
//                                     <div key={index} className="italic rounded-md shadow-xl hover:shadow-2xl lg:p-10 p-5 w-72">
//                                         <h3>{review.name}</h3>
//                                         <p>{review.review}</p>
//                                     </div>
//                                 ))}
//                             </ul>
//                         </article>
//                     )}

//                     {/* Contact Information */}
//                     <article className="border-t pt-4">
//                         <h3 className="text-xl font-semibold">Contact Information</h3>
//                         <p className="mt-2">
//                             <FaEnvelope className="inline mr-1" />
//                             Email: <a href={`mailto:${event.contactInfo.email}`} className="text-blue-500">{event.contactInfo.email}</a>
//                         </p>
//                         <p>
//                             <FaPhoneAlt className="inline mr-1" />
//                             Phone: <a href={`tel:${event.contactInfo.phone}`} className="text-blue-500">{event.contactInfo.phone}</a>
//                         </p>
//                     </article>

//                     {/* location map */}
//                     <section>
//                         <h3>Event location map</h3>
//                         <Image
//                             src={event.locationMap}
//                             alt="map"
//                             width={320}
//                             height={400}
//                             className="object-cover rounded-xl hover:shadow-2xl" />
//                     </section>
//                 </section>

//                 {/* Right Side: Event Data */}
//                 <section className="space-y-5 px-4">
//                     <h2 className="text-3xl font-bold">{event.title}</h2>
//                     <p className="text-gray-600">
//                         <FaRegClock className="inline mr-1" />
//                         {new Date(event.dateTime).toLocaleString()}
//                     </p>
//                     <p className="text-gray-600">
//                         <FaBuilding className="inline mr-1" />
//                         Hosted by: {event.companyName}
//                     </p>
//                     <p className="text-gray-600">
//                         <FaMapMarkerAlt className="inline mr-1" />
//                         Location: {event.location.country}, {event.location.city}
//                     </p>
//                     <p className="text-gray-600">
//                         <MdLocationCity className="inline mr-1" />
//                         Venue: {event.location.venue}
//                     </p>
//                     <p className="text-gray-600">
//                         <LucideFileType2 className="inline mr-1" />
//                         Type: {event.type}
//                     </p>
//                     <div className="flex items-center text-gray-600 my-1">
//                         <FaTag className="mr-2" />
//                         <p>Category: {event.category}</p>
//                     </div>

//                     {/* Tags Section */}
//                     <article>
//                         <div className="mt-2 flex flex-wrap gap-2">
//                             {event.tags.map((tag, index) => (
//                                 <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
//                                     <FaTag className="inline mr-1" />
//                                     #{tag}
//                                 </span>
//                             ))}
//                         </div>
//                     </article>

//                     <p className="mt-4 text-gray-800">{event.description}</p>

//                     {/* Organizer Information */}
//                     <article className="border-t pt-4">
//                         <h3 className="text-xl font-semibold">Speaker</h3>
//                         <div className="flex items-center mt-3">
//                             <div className="w-28 h-28">
//                                 <Image
//                                     src={event?.organizer?.photo}
//                                     alt={event?.organizer?.name}
//                                     layout="responsive"
//                                     objectFit="cover"
//                                     width={40}
//                                     height={40}
//                                     className=" rounded-full" />
//                             </div>
//                             <div className="ml-4">
//                                 <p className="font-bold">{event.organizer.name}</p>
//                                 <p className="text-gray-600">
//                                     <FaUserFriends className="inline mr-1" />
//                                     {event.organizer.followers} Followers
//                                 </p>
//                                 <p className="text-gray-600 mt-1">{event.organizer.bio}</p>
//                             </div>
//                         </div>
//                     </article>

//                     {/* sponsor */}
//                     <div>
//                         <h3>Sponsor</h3>
//                         <div className="flex gap-4 items-center">
//                             <Image
//                                 src={event.sponsor.logo}
//                                 alt="sponsor"
//                                 width={120}
//                                 height={100}
//                                 className="object-cover hover:scale-105" />
//                             <p>{event.sponsor.name}</p>
//                         </div>
//                     </div>

//                     <div className="collapse collapse-arrow bg-base-200">
//                         <input type="radio" name="my-accordion-2" defaultChecked />
//                         <div className="collapse-title text-xl font-medium">What is event management?</div>
//                         <div className="collapse-content">
//                             <p>Event management refers to the comprehensive process of planning, organizing, and executing various types of events such as conferences, weddings, corporate functions, and concerts. It involves overseeing all aspects of the event, including venue selection.</p>
//                         </div>
//                     </div>
//                     <div className="collapse collapse-arrow bg-base-200">
//                         <input type="radio" name="my-accordion-2" />
//                         <div className="collapse-title text-xl font-medium">What tasks are involved in event planning?</div>
//                         <div className="collapse-content">
//                             <p>Event planning encompasses a wide array of tasks that ensure the events success. This includes creating a budget, selecting and booking a suitable venue, setting a clear timeline for all event activities, and coordinating with vendors for catering, lighting, and sound. Additionally, event planners manage guest lists, send out invitations, and oversee marketing efforts to promote the event. On the day of the event, logistics are managed to make sure everything goes according to plan.</p>
//                         </div>
//                     </div>
//                     <div className="collapse collapse-arrow bg-base-200">
//                         <input type="radio" name="my-accordion-2" />
//                         <div className="collapse-title text-xl font-medium">  What challenges are commonly faced in event management?</div>
//                         <div className="collapse-content">
//                             <p>Event management often involves overcoming a range of challenges. Budget constraints can be difficult to manage while still delivering a high-quality experience. Unexpected problems, such as technical failures or weather disruptions, can arise, requiring quick solutions. Ensuring guest satisfaction is another major challenge, as event managers need to cater to a wide range of preferences. Coordinating with vendors, managing timelines, and avoiding delays are all part of the complex process that event planners must navigate.</p>
//                         </div>
//                     </div>
//                     <Link href={`/payment?id=${id}`}> <button className="bg-[--color-primary] text-white py-2 px-4 w-full mx-auto rounded-lg hover:bg-green-600 transition">
//                         Buy Ticket
//                     </button></Link>
//                 </section>


//             </div>
//         </div>
//     );
// };

// export default EventDetailsPage;
'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"
import { FaRegClock, FaMapMarkerAlt, FaUserFriends, FaEnvelope, FaPhoneAlt, FaTag, FaBuilding } from "react-icons/fa"
import Image from "next/image"
import { MdLocationCity } from "react-icons/md"
import { FileType2 } from "lucide-react"
import Loading from "@/components/shared/LoadingSpiner/Loading"
import Link from "next/link"
import AOS from "aos"
import "aos/dist/aos.css"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
import Button from "@/components/shared/CercleBuuton/Button"

const EventDetailsPage = ({ params }) => {
    const router = useRouter()
    const { id } = params
    const [event, setEvent] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        })

        const fetchEventsData = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/events/${id}`)
                setEvent(response.data)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching event data:", error)
                setLoading(false)
            }
        }
        fetchEventsData()
    }, [id])

    if (loading) {
        return <Loading />
    }

    if (!event) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-bold">Event Not Found</h2>
                <p className="mt-2">We could not find the event you are looking for.</p>
            </div>
        )
    }

    const mapContainerStyle = {
        width: '100%',
        height: '400px'
    }

    const center = {
        lat: 40.7128, // Replace with actual latitude
        lng: -74.0060 // Replace with actual longitude
    }

    return (
        <div className="bg-slate-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side: Image, Gallery, Reviews */}
                    <section className="space-y-12">
                        {/* Event Image */}
                        <div data-aos="zoom-in" className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <Image
                                src={event?.gallery[0]}
                                alt={event.title}
                                layout="responsive"
                                width={500}
                                height={400}
                                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                            />
                        </div>

                        {/* Event Gallery */}
                        {event.gallery && event.gallery.length > 0 && (
                            <article>
                                <div className="grid grid-cols-2 gap-4">
                                    {event?.gallery?.slice(1, 3)?.map((image, index) => (
                                        <div key={index} className="relative aspect-w-1 aspect-h-1 h-32">
                                            <Image
                                                src={image}
                                                alt={`Gallery image ${index + 1}`}
                                                layout="fill"
                                                objectFit="cover"
                                                className="hover:shadow-2xl hover:scale-105 rounded-lg transition-all duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </article>
                        )}
                        {/* Event Reviews */}
                        {event.reviews && event.reviews.length > 0 && (
                            <article data-aos="fade-up" className="bg-white rounded-2xl shadow-xl p-6">
                                <h3 className="text-2xl font-semibold mb-4 text-center font-serif text-blue-500 border-b-2 border-purple-400 pb-2 ">Reviews</h3>
                                <div className="space-y-4">
                                    {event.reviews.map((review, index) => (
                                        <div key={index} data-aos="fade-right" data-aos-delay={index * 100} className="bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                            <h4 className="font-semibold font-mono text-xl">{review.name}</h4>
                                            <p className="text-gray-600 italic">{review.review}</p>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        )}

                        {/* Contact Information */}
                        <article data-aos="fade-up" className="bg-white rounded-2xl shadow-xl p-6">
                            <h3 className="text-2xl font-semibold mb-4 text-center font-serif text-blue-500 border-b-2 border-purple-400 pb-2 ">Contact Information</h3>
                            <div className="space-y-2">
                                <p className="flex items-center">
                                    <FaEnvelope className="mr-2 text-pink-500 animate-pulse" />
                                    <a href={`mailto:${event.contactInfo.email}`} className=" hover:underline">
                                        {event.contactInfo.email}
                                    </a>
                                </p>
                                <p className="flex items-center">
                                    <FaPhoneAlt className="mr-2 text-green-500 animate-pulse" />
                                    <a href={`tel:${event.contactInfo.phone}`} className="text-green-500 hover:underline">
                                        {event.contactInfo.phone}
                                    </a>
                                </p>
                            </div>
                        </article>

                        {/* Location Map */}
                        <section data-aos="fade-up" className="bg-white rounded-2xl shadow-xl p-4">
                            <h3 className="text-2xl font-semibold mb-4 text-center font-serif text-blue-500 border-b-2 border-purple-400 pb-2 ">Event Location</h3>
                            <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                                    <GoogleMap
                                        mapContainerStyle={mapContainerStyle}
                                        center={center}
                                        zoom={14}
                                    >
                                        <Marker position={center} />
                                    </GoogleMap>
                                </LoadScript>
                            </div>
                        </section>
                    </section>

                    {/* Right Side: Event Data */}
                    <section className="space-y-8">
                        <div data-aos="fade-left">
                            <h2 className="text-4xl font-serif font-bold mb-4 text-blue-500">{event.title}</h2>
                            <div className="space-y-2 text-gray-600">
                                <p className="flex items-center">
                                    <FaRegClock className="mr-2 text-yellow-500 animate-spin" />
                                    {new Date(event.dateTime).toLocaleString()}
                                </p>
                                <p className="flex items-center">
                                    <FaBuilding className="mr-2 text-blue-500 animate-bounce" />
                                    Hosted by: {event.companyName}
                                </p>
                                <p className="flex items-center">
                                    <FaMapMarkerAlt className="mr-2 text-red-500 animate-pulse" />
                                    {event.location.country}, {event.location.city}
                                </p>
                                <p className="flex items-center">
                                    <MdLocationCity className="mr-2 text-indigo-500 animate-bounce" />
                                    Venue: {event.location.venue}
                                </p>
                                <p className="flex items-center">
                                    <FileType2 className="mr-2 text-green-500 animate-pulse" />
                                    Type: {event.type}
                                </p>
                                <p className="flex items-center">
                                    <FaTag className="mr-2 text-pink-500 " />
                                    Category: {event.category}
                                </p>
                            </div>
                        </div>

                        {/* Tags Section */}
                        <article data-aos="fade-up">
                            <div className="flex flex-wrap gap-2">
                                {event.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 50}
                                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-200 hover:scale-110"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </article>

                      <div>
                      <p data-aos="fade-up" className="text-gray-700 leading-relaxed">{event.description}</p>
                       

                       <div className="mt-2 ml-2" >
                      
                       

                       <Link href={`/payment?id=${id}`}>
                           <Button >Buy Ticket</Button>
                       </Link>
                       </div>
                      </div>

                        {/* Organizer Information */}
                        <article data-aos="fade-up" className="bg-white rounded-2xl shadow-xl p-6">
                            <h3 className="text-2xl font-semibold mb-4 text-center font-serif text-blue-500 border-b-2 border-purple-400 pb-2 ">Speaker</h3>
                            <div className="flex items-center">
                                <div className="w-32 h-24 relative">
                                    <Image
                                        src={event?.organizer?.photo}
                                        alt={event?.organizer?.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-xl"
                                    />
                                </div>
                                <div className="ml-6">
                                    <p className="font-bold text-xl font-mono text-black ">{event.organizer.name}</p>
                                    <p className="text-gray-600 flex items-center mt-1">
                                        <FaUserFriends className="mr-2 text-green-500 animate-pulse" />
                                        {event.organizer.followers} Followers
                                    </p>
                                    <p className="text-gray-700 mt-2">{event.organizer.bio}</p>
                                </div>
                            </div>
                        </article>

                        {/* Sponsor */}
                        <div data-aos="fade-up" className="bg-white rounded-2xl shadow-xl p-6">
                            <h3 className="text-2xl font-semibold mb-4 text-center font-serif text-blue-500 border-b-2 border-purple-400 pb-2 ">Sponsor</h3>
                            <div className="flex items-center">
                                <Image
                                    src={event.sponsor.logo}
                                    alt="sponsor"
                                    width={120}
                                    height={100}
                                    className="object-contain transition-transform duration-300 hover:scale-110"
                                />
                                <p className="ml-6 text-xl font-medium">{event.sponsor.name}</p>
                            </div>
                        </div>

                        {/* FAQ Accordion */}
                        <div data-aos="fade-up" className="space-y-4">
                            <div className="collapse collapse-plus bg-white rounded-xl shadow-lg">
                                <input type="radio" name="my-accordion-3" defaultChecked />
                                <div className="collapse-title text-lg font-medium font-mono">
                                    What is event management?
                                </div>
                                <div className="collapse-content">
                                    <p>Event management is the process of planning, organizing, and executing various types of events, including conferences, weddings, and corporate functions.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-white rounded-xl shadow-lg">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-lg font-medium font-mono">
                                    What tasks are involved in event planning?
                                </div>
                                <div className="collapse-content">
                                    <p>Event planning involves budgeting, venue selection, timeline creation, vendor coordination, guest list management, and logistics oversight.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-plus bg-white rounded-xl shadow-lg">
                                <input type="radio" name="my-accordion-3" />
                                <div className="collapse-title text-lg font-medium font-mono">
                                    What challenges are common in event management?
                                </div>
                                <div className="collapse-content">
                                    <p>Common challenges include budget constraints, unexpected issues, ensuring guest satisfaction, vendor coordination, and managing tight timelines.</p>
                                </div>
                            </div>
                        </div>
                     

                    </section>
                </div>
            </div>
        </div>
    )
}

export default EventDetailsPage