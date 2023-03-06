import {useState} from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import { moviesArray } from "../../utils/constants";

export default function Movies(loggedIn) {

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      {loading ? (
        <Preloader />
      ) : (
        <MoviesCardList moviesArray={moviesArray} savedFilms={false}/>
      )}
      <Footer />
    </>
  );
}
