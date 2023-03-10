import './SavedMovies.css';

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import {savedMoviesArray} from "../../utils/constants";

export default function SavedMovies() {
  return (
    <div className="saved-movies">
      <SearchForm/>
      <MoviesCardList moviesArray={savedMoviesArray} savedFilms={true}/>
    </div>
  );
}
