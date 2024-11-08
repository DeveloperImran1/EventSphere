import Books from "../books/Books";
import Banner from "./Banner";

const HomeContainer = () => {
    return (
        <div className=" ">
          <Banner></Banner>
          <Books></Books>
        </div>
    );
};

export default HomeContainer;