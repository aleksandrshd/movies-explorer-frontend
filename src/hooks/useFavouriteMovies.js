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

  const cbHandleMovieClick = useCallback(async (card, savedFilms) => {

    const { isLiked, movieId } = setIsLiked(card, favouriteMovies);

    if (!isLiked && !savedFilms) {
      try {
        return await api.addMovieToFavourites(convertMovieData(card));
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
        return await api.removeMovieFromFavourites(movieIdDel);
      } catch (error) {
        console.log(error);
      }
    }
    setFavouriteMovies(await api.getFavouriteMovies());

  }, [favouriteMovies]);

  return { favouriteMovies, cbHandleMovieClick };
}

export default useFavouriteMovies;
