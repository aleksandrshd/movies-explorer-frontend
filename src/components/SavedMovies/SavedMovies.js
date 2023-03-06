import './SavedMovies.css';

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

import { savedMoviesArray } from "../../utils/constants";

export default function SavedMovies(loggedIn) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main className="saved-movies">
        <SearchForm/>
        <MoviesCardList moviesArray={savedMoviesArray} savedFilms={true}/>
      </main>
      <Footer/>
    </>
  );
}
