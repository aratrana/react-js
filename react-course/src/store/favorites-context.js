import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoretMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);
  const addFavoriteHandler = (favoretMeetup) => {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.concat(favoretMeetup);
    });
  };
  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevFavorites) => {
      return prevFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };
  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
