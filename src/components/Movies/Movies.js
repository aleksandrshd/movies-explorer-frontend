import {useState} from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import {moviesArray} from "../../utils/constants";

export default function Movies() {

  const [loading, setLoading] = useState(false);

  return (
    <>
        <SearchForm/>
        {loading ? (
          <Preloader/>
        ) : (
          <MoviesCardList moviesArray={moviesArray} savedFilms={false}/>
        )}
    </>
  );
}
