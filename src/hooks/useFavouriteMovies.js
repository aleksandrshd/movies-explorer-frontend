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

    event.preventDefault();
    event.stopPropagation();
    
    const { isLiked, movieId } = setIsLiked(card, favouriteMovies);

    if (!isLiked && !savedFilms) {
      try {
        await api.addMovieToFavourites(convertMovieData(card));
        const newFavouriteMovies = favouriteMovies.slice();
        newFavouriteMovies.push(convertMovieData(card));
        return setFavouriteMovies(newFavouriteMovies);
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
        const indexOfElement = favouriteMovies.indexOf(card);
        const newFavouriteMovies = favouriteMovies.slice(0, indexOfElement);
        newFavouriteMovies.concat(favouriteMovies.slice(indexOfElement, favouriteMovies.length));
        return setFavouriteMovies(newFavouriteMovies);
      } catch (error) {
        console.log(error);
      }
    }



  }, [favouriteMovies]);

  return { favouriteMovies, cbHandleMovieClick };
}

export default useFavouriteMovies;
