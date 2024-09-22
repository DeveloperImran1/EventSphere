

const SectionTitle = ({ title, description,subTitle }) => {
    return (
        <div className="mx-auto text-center md:w-1/2  mb-12 mt-20">
            <div className=" flex gap-5 justify-center items-center mb-2">
                <p className="w-12 h-[2px] bg-yellow-500"></p>
               <p className="text-yellow-500 font-medium"> {subTitle}</p>
                <p className="w-12 h-[2px] bg-yellow-500 "></p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold uppercase mb-4 ">{title}</h2>
            <h3 className=" text-sm text-gray-500">{description}</h3>
        </div>
    );
};

export default SectionTitle;