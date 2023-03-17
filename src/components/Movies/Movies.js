import {useContext, useEffect, useState} from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import {moviesArray} from "../../utils/constants";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {getAllDefaultMovies, shortFilter, wordFilter} from "../../utils/utils";

export default function Movies({getDefaultMovies}) {

  const currentUser = useContext(CurrentUserContext);
  const storageKey = currentUser._id;
  const [loading, setLoading] = useState(false);
  const [filterOn, setFilterOn] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [foundMoviesArray, setFoundMoviesArray] = useState([]);

  useEffect(() => {
    if (localStorage.getItem(storageKey)) {
      const config = JSON.parse(localStorage.getItem(storageKey));
      setFilterOn(config.filterOn);
      setKeyWord(config.keyWord);
    }
  }, []);

  useEffect(() => {
    const getResult = async () => {

      const allMovies = await getAllDefaultMovies(getDefaultMovies, setLoading);
      setFoundMoviesArray(allMovies.filter((item) => wordFilter(keyWord, item)));
      console.log('foundMoviesArray : ', foundMoviesArray);

      localStorage.setItem(
        storageKey,
        JSON.stringify({
          filterOn,
          keyWord,
        }),
      );

      setLoading(false);
    };

    if (keyWord !== '') getResult();

  }, [keyWord, filterOn]);

  return (
    <>
      <SearchForm isFilterOn={filterOn}
                  setFilterOn={setFilterOn}
                  keyWord={keyWord}
                  setKeyWord={setKeyWord}/>
      {loading ? (
        <Preloader/>
      ) : (
        <MoviesCardList moviesArray={foundMoviesArray} savedFilms={false}/>
      )}
    </>
  );
}
