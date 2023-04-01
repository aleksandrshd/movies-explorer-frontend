import { useEffect, useState } from "react";
import { shortFilter, wordFilter } from "../utils/utils";

const useFilteredMovies = (allMovies, storageKey) => {

  const [filterOn, setFilterOn] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [foundMoviesArray, setFoundMoviesArray] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);

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

    localStorage.setItem(storageKey, JSON.stringify({
      filterOn, keyWord,
    }));

  }, [keyWord, filterOn, storageKey]);

  // Фильтрация списка фильмов по ключевому слову или ключевому слову и продолжительности
  useEffect(() => {

    /*if (keyWord !== '') {*/

      let filteredMovies = keyWord ? allMovies.filter((movie) => wordFilter(keyWord, movie)) : allMovies;

      if (filterOn) {
        filteredMovies = filteredMovies.filter(movie => shortFilter(40, movie));
      }

      setFoundMoviesArray(filteredMovies);
    /*}*/

  }, [allMovies, keyWord, filterOn]);

  // Установка наличия или отсутствия результатов поиска
  useEffect(() => {

    if (/*(keyWord !== '') && */(foundMoviesArray.length === 0)) {

      setNothingFound(true);

    } else setNothingFound(false);

  }, [foundMoviesArray]);

  return { filterOn, setFilterOn, keyWord, setKeyWord, foundMoviesArray, nothingFound};
}

export default useFilteredMovies;
