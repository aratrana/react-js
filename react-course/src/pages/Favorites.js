import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const Favorite = () => {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList meetups={favoriteCtx.favorites} />
    </section>
  );
};

export default Favorite;
