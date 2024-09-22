import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import image from '@/app/assets/react.jpeg'
import { MdFavoriteBorder } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { ImShare } from "react-icons/im";

const EventTime = () => {
  return (
   <div className="mx-auto p-4 ">
 <Tabs defaultValue="account" className="">
      <TabsList className="grid w-full md:grid-cols-5 gap-2  grid-cols-3">
        <TabsTrigger value="account" className="w-14 ">
          All
        </TabsTrigger>
        <TabsTrigger value="Today" className="w-14">
          Today
        </TabsTrigger>
        <TabsTrigger value="Tomorrow" className="w-20">
          Tomorrow
        </TabsTrigger>
        <TabsTrigger value="Next Week" className="w-24">
          Next Week
        </TabsTrigger>
        <TabsTrigger value="This Month" className="w-24">
          This Month
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="md:w-[350px] py-5 h-[500px] md:my-5 my-12">
          <CardContent>
            <div className=" ">
              <div className="max-w-[300px] ">
              <Image
                src={image}
                alt="Picture of the author"
                className="rounded-md hover:scale-105 transition-all duration-300"
              />
              </div>
              <div className="">
                <div className=" flex justify-between pt-2">
                  <div className="  flex gap-2 ">
                  <ImShare size={20}/>
                    <MdFavoriteBorder size={20} />
                  </div>
                  <FaArrowRight
                    size={25}
                    className=" border-2 px-1 py-1 border-[#00a88f]  rounded-full cursor-pointer  "
                  />
                </div>
                <div className="  py-3">
                  <p className="font-semibold">
                    Info Session : Great Hostel Give Back Program.
                  </p>
                  <p className=" text-base text-gray-600 my-2">
                    Date : Thu , Sep 26 • 5:30 AM{" "}
                  </p>
                  <p className=" text-gray-500 font-semibold">
                    Organizer : Mindset Mastery
                  </p>
                  <p className=" text-gray-500 my-2">Via : Zoom</p>
                  <p className=" text-gray-500 font-semibold">Aligned Being</p>
                  <p className=" text-gray-500 my-2">174 followers</p>

                  <p>Fee : 100 $ </p>
                  <p className=" text-gray-500 text-sm my-2">Promoted</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
   </div>
  );
};

export default EventTime;
