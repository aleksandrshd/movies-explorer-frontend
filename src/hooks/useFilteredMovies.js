import {useEffect, useState} from "react";
import {shortFilter, wordFilter} from "../utils/utils";

const useFilteredMovies = (allMovies, storageKey) => {

  const [filterOn, setFilterOn] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [foundMoviesArray, setFoundMoviesArray] = useState([]);

  // Восстановление конфигурации из хранилища
  useEffect(() => {
    if (localStorage.getItem(storageKey)) {

      const config = JSON.parse(localStorage.getItem(storageKey));
      setFilterOn(config.filterOn);
      setKeyWord(config.keyWord);

    }
  }, [storageKey]);

  // Сохранение конфигурацию при изменении фильтров
  useEffect(() => {

    if (storageKey) {

      localStorage.setItem(storageKey, JSON.stringify({
        filterOn, keyWord,
      }));
    }
    
  }, [keyWord, filterOn, storageKey]);

  // Фильтрация списка фильмов по ключевому слову или ключевому слову и продолжительности
  useEffect(() => {

    let filteredMovies = keyWord ? allMovies.filter((movie) => wordFilter(keyWord, movie)) : allMovies;

    if (filterOn) {
      filteredMovies = filteredMovies.filter(movie => shortFilter(40, movie));
    }

    setFoundMoviesArray(filteredMovies);

  }, [allMovies, keyWord, filterOn]);

  return {filterOn, setFilterOn, keyWord, setKeyWord, foundMoviesArray, nothingFound: foundMoviesArray.length === 0};
}

export default useFilteredMovies;
