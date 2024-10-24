
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
import { useQuery } from "@tanstack/react-query"
import PopularEvent from "@/components/PopularEvent/PopularEvent"
import PopularEvents from "@/components/popularEvents/PopularEvents"
import MapComponent from "@/components/shared/MapComponent"
import LeafLetMap from "@/components/shared/leafLetMap/LeafLetMap"

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
                // console.log(response)
                setEvent(response.data)
                setLoading(false)
            } catch (error) {
                console.error("Error fetching event data:", error)
                setLoading(false)
            }
        }
        fetchEventsData()
    }, [id])
// console.log(event)
//   console.log(event?.location?.city)
const city=event?.location?.city
// console.log(city)
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
                        <MapComponent city={city} />
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
                <PopularEvents/>
            </div>
        </div>
    )
}

export default EventDetailsPage