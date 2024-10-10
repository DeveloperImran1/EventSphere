export const dynamic = "force-dynamic";  // vercel a deploy korar por cassing kore rakhena

import HomeContainer from "@/components/home/HomeContainer";

export default function Home() {
  return (
    <div className="space-y-20">
      <HomeContainer />
    </div>
  );
}
