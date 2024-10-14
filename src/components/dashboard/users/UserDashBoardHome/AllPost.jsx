import useMyAllPostWithEmail from "@/hooks/useMyAllPostWithEmail";
import PostCard from "./PostCard";


const AllPost = () => {
  const { data: posts = [] } = useMyAllPostWithEmail();

  return (
    <>
      {
        posts?.map(post => <PostCard key={post?._id} post={post}></PostCard>)
      }

    </>

  );
};

export default AllPost;
