import {useContext, useEffect, useState} from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {getAllDefaultMovies, shortFilter, wordFilter} from "../../utils/utils";

export default function Movies({getDefaultMovies}) {

  const currentUser = useContext(CurrentUserContext);
  const storageKey = currentUser._id;
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterOn, setFilterOn] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [foundMoviesArray, setFoundMoviesArray] = useState([]);

  // Восстановили конфигурацию из хранилища
  useEffect(() => {
    if (localStorage.getItem(storageKey)) {
      const config = JSON.parse(localStorage.getItem(storageKey));
      setFilterOn(config.filterOn);
      setKeyWord(config.keyWord);
    }
  }, []);

  // Сохраняем конфигурацию при изменении фильтров
  useEffect(() => {
    localStorage.setItem(
        storageKey,
        JSON.stringify({
          filterOn,
          keyWord,
        }),
    );
  }, [keyWord, filterOn]);

  // Один раз загрузили список в начале работы страницы и больше не трогаем его.
  useEffect(async () => {
    const movies = await getAllDefaultMovies(getDefaultMovies, setLoading);
    setAllMovies(movies);

  }, []);

  // Здесь только фильтрация
  useEffect(() => {
    let filteredMovies = keyWord ? allMovies.filter((movie) => wordFilter(keyWord, movie)) : allMovies;

    if (filterOn) {
      filteredMovies = filteredMovies.filter(movie => shortFilter(40, movie));
    }

    setFoundMoviesArray(filteredMovies);
  }, [allMovies, keyWord, filterOn]);



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
