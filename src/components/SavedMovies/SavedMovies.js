import './SavedMovies.css';

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import useFavouriteMovies from "../../hooks/useFavouriteMovies";
import useFilteredMovies from "../../hooks/useFilteredMovies";
import {useContext} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

export default function SavedMovies() {

  const currentUser = useContext(CurrentUserContext);
  const storageKey = `favourites_${currentUser._id}`;

  // Получение текущего массива избранных фильмов и обработчика клика на кнопку лайк
  const { favouriteMovies, cbHandleMovieClick } = useFavouriteMovies();

  // Получение массива отфильтрованных карточек, значений и установщиков значений фильтров по ключевому слову и
  // продолжительности, и отсутствия результатов поиска
  const {
    filterOn,
    setFilterOn,
    keyWord,
    setKeyWord,
    foundMoviesArray,
    nothingFound
  } = useFilteredMovies(favouriteMovies, storageKey);

  return (
    <div className="saved-movies">
      <SearchForm filterOn={filterOn}
                  setFilterOn={setFilterOn}
                  keyWord={keyWord}
                  setKeyWord={setKeyWord}
                  nothingFound={nothingFound}/>
      <MoviesCardList displayMovies={foundMoviesArray}
                      savedFilms={true}
                      onMovieLike={cbHandleMovieClick}
                      favouriteMovies={favouriteMovies}/>
    </div>
  );
}
