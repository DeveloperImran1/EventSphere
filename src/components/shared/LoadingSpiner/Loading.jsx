import { ScaleLoader } from "react-spinners";
const Loading = () => {
    return (
            <div className="flex justify-center items-center flex-col min-h-[calc(100vh-116px)] ">
                <ScaleLoader size={100} color='#F92FD3' ></ScaleLoader>
            </div>
    );
};

export default Loading;