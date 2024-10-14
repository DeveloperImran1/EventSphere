import Image from "next/image";
import { GiSelfLove } from "react-icons/gi";
import { RiReplyAllFill } from "react-icons/ri";
const PostCard = ({post}) => {
    console.log("My post is ", post)
    return (
        <div>
            <div class="max-w-4xl mx-auto my-6 p-4 bg-white rounded-lg shadow-lg">

                <div>
                    <Image
                        height={675}
                        width={1200}
                        class="w-full h-auto py-6 pl-4 rounded-md"
                        src={post?.content?.media[0] || "https://i.postimg.cc/vTs7YbNw/9-c4d369305c1083b4426f.jpg"}
                        alt="Textile Samples"
                    />
                </div>


                <div class="p-6 bg-white">
                    <h2 class="text-2xl text-left font-bold text-gray-800 mb-4">
                       {post?.content?.title || "Collection of textile samples lay spread"} 
                    </h2>
                    <h2 class="text-lg text-left text-gray-600 leading-relaxed">
                    {post?.content?.text || "A wonderful serenity has taken possession of my entire soul like these sweet mornings of spring which I enjoy with my whole heart. A wonderful serenity has taken possession of my entire soul like these sweet mornings of spring which I enjoy with my whole heart."} 
                    </h2>
                </div>
                <div className="flex gap-4 ">
                    <button className="w-full sm:w-auto ml-4 flex items-center gap-2 text-xl px-3 py-2 rounded-md bg-green-300 font-bold "><GiSelfLove /> Love</button>
                    <button className="w-full sm:w-auto ml-4 flex items-center gap-2 text-xl px-3 py-2 rounded-md bg-orange-400 font-bold "><RiReplyAllFill /> Reply</button>

                </div>
            </div>
        </div>
    );
};

export default PostCard;