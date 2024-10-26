import FavoriteListComponent from "@/components/favorite-list/FavoriteListComponent";


export const metadata = {
  title:"Favorite-List",
  description: "Favorite list, Smart Event Management and Booking Platform",
  keywords:["online", "ticket", "selling", "system","event", "management"]
};

const FavoriteList = () => {

  return (
    <section className="">
    <FavoriteListComponent/>
    </section>
  );
};

export default FavoriteList;
