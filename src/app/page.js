import EventCard from "@/components/events/EventCard";
import Organizers from "@/components/organizers/Organizers";
import Testimonials from "@/components/testimonials/Testimonials";
import HomeContainer from "@/components/home/HomeContainer";
import Image from "next/image";
import Logo from "@/components/shared/Logo";

export default function Home() {
  return (
    <div className="space-y-20">
      <EventCard />
      <Organizers />
      <Testimonials />
      <HomeContainer />
    </div>
  );
}
