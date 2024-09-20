import EventCard from "@/components/EventCard";
import Organizers from "@/components/organizers/Organizers";
import Testimonials from "@/components/testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     I am home all content
     <EventCard></EventCard>
     <Organizers/>
     <Testimonials/>
   
    </div>
  );
}
