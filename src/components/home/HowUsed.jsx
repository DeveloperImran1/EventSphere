import { PieChart, BarChart2, Mail, Briefcase } from "lucide-react";

const Banner = ({ number, title, description, icon, gradient }) => (
  <div className={`relative w-full h-auto md:h-32 mb-6 ${gradient} text-white overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105`}>
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      <polygon points="0,0 95,0 100,50 95,100 0,100 5,50" className="fill-current" />
    </svg>
    <div className="relative z-10 flex flex-col md:flex-row items-center h-full px-6 py-4 md:py-0">
      <div className="flex flex-col items-center mb-2 md:mb-0 md:mr-6">
        <span className="text-4xl md:text-5xl font-bold font-lato">{number}</span>
        <span className="text-xs md:text-sm font-lato">options</span>
      </div>
      <div className="flex-grow text-center md:text-left">
        <h2 className="text-xl md:text-2xl font-semibold uppercase mb-1 font-roboto">{title}</h2>
        <p className="text-sm md:text-base font-openSans leading-snug">{description}</p>
      </div>
      <div className="mt-2 md:mt-0 md:ml-6">{icon}</div>
    </div>
  </div>
);

export default function Component() {
  const banners = [
    {
      number: "01",
      title: "Infographics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <PieChart size={32} />,
      gradient: "bg-gradient-to-r from-orange-400 to-yellow-400",
    },
    {
      number: "02",
      title: "Infographics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <BarChart2 size={32} />,
      gradient: "bg-gradient-to-r from-lime-500 to-green-400",
    },
    {
      number: "03",
      title: "Infographics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Mail size={32} />,
      gradient: "bg-gradient-to-r from-green-400 to-teal-400",
    },
    {
      number: "04",
      title: "Infographics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <Briefcase size={32} />,
      gradient: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {banners.map((banner) => (
        <Banner key={banner.number} {...banner} />
      ))}
    </div>
  );
}
