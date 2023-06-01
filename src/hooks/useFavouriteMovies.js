import { useCallback, useEffect, useState } from "react";

import * as api from "../utils/MainApi";

import { convertMovieData, setIsLiked } from "../utils/utils";

const useFavouriteMovies = () => {

  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    const getFavouriteMovies = async () => {
      const movies = await api.getFavouriteMovies();
      setFavouriteMovies(movies);
    }
    getFavouriteMovies();
  }, []);

  const cbHandleMovieClick = useCallback(async (event, card, savedFilms) => {

    event.stopPropagation();
    
    const { isLiked, movieId } = setIsLiked(card, favouriteMovies);

    if (!isLiked && !savedFilms) {
      try {
        await api.addMovieToFavourites(convertMovieData(card));
        return setFavouriteMovies(await api.getFavouriteMovies());
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        let movieIdDel;
        if (savedFilms) {
          movieIdDel = card._id;
        } else {
          movieIdDel = movieId;
        }
        await api.removeMovieFromFavourites(movieIdDel);
        return setFavouriteMovies(await api.getFavouriteMovies());
      } catch (error) {
        console.log(error);
      }
    }



  }, [favouriteMovies]);

  return { favouriteMovies, cbHandleMovieClick };
}

export default useFavouriteMovies;
