"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import eventsDataJson from "@/components/allEventsPage/EventDataJson";

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
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Event Not Found</h2>
        <p className="mt-2">We couldn't find the event you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white rounded-lg shadow-lg p-5">
        {/* Event Header */}
        <img className="w-full h-60 object-cover rounded-t-lg" src={event.photo} alt={event.title} />
        <h2 className="text-3xl font-bold mt-4">{event.title}</h2>
        <p className="text-gray-600">{new Date(event.dateTime).toLocaleString()}</p>
        <p className="text-gray-600">Hosted by: {event.companyName}</p>
        <p className="text-gray-600">Location: {event.location}</p>

        {/* Event Description */}
        <p className="mt-4 text-gray-800">{event.description}</p>

        {/* Organizer Information */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold">Organizer</h3>
          <div className="flex items-center mt-3">
            <img
              className="w-12 h-12 rounded-full"
              src={event.organizer.photo || "/default-profile.png"}
              alt={event.organizer.name}
            />
            <div className="ml-4">
              <p className="font-bold">{event.organizer.name}</p>
              <p className="text-gray-600">{event.organizer.followers} Followers</p>
              <p className="text-gray-600 mt-1">{event.organizer.bio}</p>
            </div>
          </div>
        </div>

        {/* Event Price and Button */}
        <div className="flex justify-between items-center mt-6">
          <span className="font-bold text-xl">{event.price} USD</span>
          <button className="bg-[--color-logo] text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
            Buy Ticket
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
          <ul className="mt-4 space-y-4">
            {event.faqs.map((faq, index) => (
              <li key={index}>
                <p className="font-semibold">{faq.question}</p>
                <p className="text-gray-600">{faq.answer}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Event Gallery */}
        {event.gallery && event.gallery.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Event Gallery</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {event.gallery.map((image, index) => (
                <img key={index} className="w-full h-40 object-cover rounded-lg" src={image} alt={`Gallery image ${index + 1}`} />
              ))}
            </div>
          </div>
        )}

        {/* Event Reviews */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Reviews</h3>
          <ul className="mt-4 space-y-4">
            {event.reviews.map((review, index) => (
              <li key={index} className="text-gray-600 italic">
                "{review}"
              </li>
            ))}
          </ul>
        </div>

        {/* Tags Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Tags</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {event.tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 border-t pt-4">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p className="mt-2">
            Email: <a href={`mailto:${event.contactInfo.email}`} className="text-blue-500">{event.contactInfo.email}</a>
          </p>
          <p>Phone: <a href={`tel:${event.contactInfo.phone}`} className="text-blue-500">{event.contactInfo.phone}</a></p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
