import { ScaleLoader } from "react-spinners";
const Loading = () => {
    return (
            <div className="flex justify-center items-center flex-col min-h-[calc(100vh-116px)] ">
                <ScaleLoader size={100} color='#1b85db' ></ScaleLoader>
            </div>
    );
};

export default Loading;