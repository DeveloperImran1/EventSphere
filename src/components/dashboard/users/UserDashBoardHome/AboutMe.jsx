import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import React from "react";

const AboutMe = () => {
  const pathname = usePathname();
  const lastPathSegment = pathname?.split('/').filter(Boolean).pop();
  const { data, isLoading, refetch } = useQuery({
      queryKey: ["user"],
      queryFn: () =>
          fetch(`process.env.https://event-sphare-server.vercel.app/user/${lastPathSegment}`).then((res) =>
              res.json()
          ),
  });
  return (
    <div className="px-4 lg:px-8">
      <div>
        <h2 className="text-xl lg:text-2xl text-left text-green-400 font-bold">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed lg:text-xl text-left"> {data?.aboutMe || " A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. A collection of textile samples lay spread out on the table - Samsa was a traveling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame."}
       
        </p>
      </div>

      <div>
        <h2 className="text-xl lg:text-2xl text-left mt-6 text-green-400 font-bold">Skills</h2>
        <div className="flex flex-wrap">
          {[data?.skills || 'PhotoShop', data?.specialty || 'ReactJS', 'BoostTrap', 'Responsive', 'Crypto'].map(skill => (
            <div className="p-2" key={skill}>
              <button className="p-2 px-4 rounded-md bg-green-200 text-sm lg:text-base hover:bg-green-400 transition duration-300">
                {skill}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl lg:text-2xl text-left mt-6 mb-3 text-green-400 font-bold">Language</h2>
        <div className="flex flex-wrap gap-4">
          {['English', 'French', 'Bangla'].map(language => (
            <h2 className="text-xl lg:text-2xl" key={language}>{language}</h2>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl lg:text-2xl mt-6 mb-3 text-left text-green-400 font-bold">Personal Information</h2>
        <div>
          <table className="min-w-full table-auto">
            <tbody>
              <tr>
                <td className="text-lg text-left text-gray-600 leading-relaxed p-2">Name:</td>
                <td className="text-lg text-left text-gray-600 leading-relaxed p-2">{data?.name || "Anonymus"}</td>
              </tr>
              <tr>
                <td className="text-lg text-left text-gray-600 leading-relaxed p-2">Email:</td>
                <td className="text-lg text-left text-gray-600 leading-relaxed p-2">{data?.email || "example@example.com"}</td>
              </tr>
              <tr>
                <td className="text-lg text-left text-gray-600 leading-relaxed p-2">Availability:</td>
                <td className="text-lg text-left text-gray-600 leading-relaxed p-2">Available</td>
              </tr>
              <tr>
                <td className="text-lg text-left text-gray-600 leading-relaxed p-2">Date of Birth:</td>
                <td className="text-lg text-left text-gray-600 leading-relaxed p-2">{data?.birth}</td>
              </tr>
              <tr>
                <td className="text-lg text-left text-gray-600 leading-relaxed p-2">Location:</td>
                <td className="text-lg text-left text-gray-600 leading-relaxed p-2">{data?.country || "Bangladesh"}, {data?.city || "Joypurhat"}</td>
              </tr>
              <tr>
                <td className="text-lg text-left text-gray-600 leading-relaxed p-2">Years of Experience:</td>
                <td className="text-lg text-left text-gray-600 leading-relaxed p-2">01 Years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
