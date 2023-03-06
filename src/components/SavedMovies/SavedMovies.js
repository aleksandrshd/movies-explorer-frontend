import './SavedMovies.css';

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function SavedMovies(loggedIn) {
  return (
    <>
      <Header loggedIn={loggedIn}/>
      <main className="saved-movies">
        <SearchForm/>
        <MoviesCardList savedFilms={true}/>
      </main>
      <Footer/>
    </>
  );
}
