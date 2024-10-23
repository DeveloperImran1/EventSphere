
const SectionTitleSimple = ({ title, subtitle }) => {
    return (
        <div>
            <div className="py-6 md:py-11 lg:py-16 max-w-2xl mx-auto">
                <h2 className="text-center font-bold 2xl:font-black font-mono text-3xl lg:text-5xl 2xl:text-7xl text-blue-500 mb-4">{title}</h2>
                <p className="text-center hidden md:block text-[18px] text-gray-600">{subtitle}</p>
            </div>
        </div>
    );
};

export default SectionTitleSimple;