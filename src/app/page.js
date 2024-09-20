<<<<<<< HEAD
import EventCard from "@/components/EventCard";
import Organizers from "@/components/organizers/Organizers";
import Testimonials from "@/components/testimonials/Testimonials";
=======
import EventCard from "@/components/events/EventCard";
import HomeContainer from "@/components/home/HomeContainer";
>>>>>>> 57b2d88a7437973dd77ad3cf19e4de5cad180ce2
import Image from "next/image";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     I am home all content
     <EventCard></EventCard>
     <Organizers/>
     <Testimonials/>
=======
    <div >
    <HomeContainer></HomeContainer>
>>>>>>> 57b2d88a7437973dd77ad3cf19e4de5cad180ce2
   
    </div>
  );
}
