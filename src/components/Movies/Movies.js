import { useContext, useEffect, useState } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {getAllDefaultMovies, shortFilter, wordFilter} from "../../utils/utils";

export default function Movies({getDefaultMovies, deviceType}) {

  const currentUser = useContext(CurrentUserContext);
  const storageKey = currentUser._id;
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterOn, setFilterOn] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [foundMoviesArray, setFoundMoviesArray] = useState([]);
  const [displayMoviesArray, setDisplayMoviesArray] = useState([]);
  const [addBtnVisible, setAddBtnVisible] = useState(true);

  const onAddBtnClick = () => {

    let i = displayMoviesArray.length;
    let addAmmount = 0;
    if (deviceType === 'desktop') {
      addAmmount = 4;
    } else if ((deviceType === 'tablet') || (deviceType === 'mobile')) {
      addAmmount = 2;
    }

    const newDisplayArray = displayMoviesArray.slice();
    newDisplayArray.push(...foundMoviesArray.slice(i, i + addAmmount));

    setDisplayMoviesArray(newDisplayArray);

    if (displayMoviesArray.length = foundMoviesArray.length) {
      setAddBtnVisible(false);
    }
  };

  // Восстановили конфигурацию из хранилища
  useEffect(() => {
    if (localStorage.getItem(storageKey)) {
      const config = JSON.parse(localStorage.getItem(storageKey));
      setFilterOn(config.filterOn);
      setKeyWord(config.keyWord);
    }
  }, [storageKey]);

  // Сохраняем конфигурацию при изменении фильтров
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({
      filterOn, keyWord,
    }),);
  }, [keyWord, filterOn]);

  // Один раз загрузили список в начале работы страницы и больше не трогаем его.
  useEffect(() => {
    const getAllMovies = async () => {
      const movies = await getAllDefaultMovies(getDefaultMovies, setLoading);
      setAllMovies(movies);
    }
    getAllMovies();
  }, [getDefaultMovies]);

  // Здесь только фильтрация
  useEffect(() => {
    let filteredMovies = keyWord ? allMovies.filter((movie) => wordFilter(keyWord, movie)) : allMovies;

    if (filterOn) {
      filteredMovies = filteredMovies.filter(movie => shortFilter(40, movie));
    }

    setFoundMoviesArray(filteredMovies);
  }, [allMovies, keyWord, filterOn]);

  useEffect(() => {

    if (deviceType === 'desktop') {
      setDisplayMoviesArray(foundMoviesArray.slice(0, 12));
    } else if (deviceType === 'tablet') {
      setDisplayMoviesArray(foundMoviesArray.slice(0, 8));
    } else if (deviceType === 'mobile') {
      setDisplayMoviesArray(foundMoviesArray.slice(0, 5));
    }

  }, [foundMoviesArray, deviceType]);

  useEffect(() => {

    if (((deviceType === 'desktop') && (displayMoviesArray.length < 12)) ||
      ((deviceType === 'tablet') && (displayMoviesArray.length < 8)) ||
      ((deviceType === 'mobile') && (displayMoviesArray.length < 5))) {
      setAddBtnVisible(false);
    }

  }, []);

  useEffect(() => {

    if (((deviceType === 'desktop') && (displayMoviesArray.length < 12)) ||
      ((deviceType === 'tablet') && (displayMoviesArray.length < 8)) ||
      ((deviceType === 'mobile') && (displayMoviesArray.length < 5))) {
      setAddBtnVisible(false);
    }

  }, [deviceType, displayMoviesArray]);

  return (<>
      <SearchForm filterOn={filterOn}
                  setFilterOn={setFilterOn}
                  keyWord={keyWord}
                  setKeyWord={setKeyWord}
                  deviceType={deviceType}/>
      {loading ? (<Preloader/>) : (<MoviesCardList moviesArray={displayMoviesArray}
                                                   savedFilms={false}
                                                   onAddBtnClick={onAddBtnClick}
                                                   addBtnVisible={addBtnVisible}/>)}
    </>);
}
