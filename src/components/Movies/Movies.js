import {useContext, useEffect, useState} from "react";

import useCardsAmount from "../../hooks/useCardsAmmount";

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
  const [currentMoviesAmount, setCurrentMoviesAmount] = useState(0);
  const [addBtnVisible, setAddBtnVisible] = useState(true);
  const [nothingFound, setNothingFound] = useState(false);

  // Получение начального количества карточек для отрисовки и количества добавляемых кнопкой еще карточек
  const {initCardsAmount, addCardsAmount} = useCardsAmount();

  // Обработчик нажатия на кнопку ещё
  const onAddBtnClick = () => {

    if (foundMoviesArray.length < currentMoviesAmount + addCardsAmount) {

      setCurrentMoviesAmount(foundMoviesArray.length);
      setAddBtnVisible(false);

    } else setCurrentMoviesAmount(currentMoviesAmount + addCardsAmount);

  };

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

  // Загрузка списка в начале работы страницы один раз и больше не трогаем его.
  useEffect(() => {
    const getAllMovies = async () => {

      const movies = await getAllDefaultMovies(getDefaultMovies, setLoading);
      setAllMovies(movies);

    }

    getAllMovies();

  }, [getDefaultMovies]);

  // Фильтрация списка фильмов по ключевому слову или ключевому слову и продолжительности
  useEffect(() => {

    if (keyWord !== '') {

      let filteredMovies = keyWord ? allMovies.filter((movie) => wordFilter(keyWord, movie)) : allMovies;

      if (filterOn) {
        filteredMovies = filteredMovies.filter(movie => shortFilter(40, movie));
      }

      setFoundMoviesArray(filteredMovies);
    }

  }, [allMovies, keyWord, filterOn]);

  // Установка текущего количества отображаемых карточек
  useEffect(() => {

    if (foundMoviesArray.length < initCardsAmount) {
      setCurrentMoviesAmount(foundMoviesArray.length);

    } else setCurrentMoviesAmount(initCardsAmount);

  }, [foundMoviesArray, initCardsAmount]);

  // Установка видимости кнопки ещё
  useEffect(() => {

    if (foundMoviesArray.length <= currentMoviesAmount) {

      setAddBtnVisible(false);

    } else setAddBtnVisible(true);

  }, [foundMoviesArray, currentMoviesAmount]);

  // Установка наличия или отсутствия результатов поиска
  useEffect(() => {

    if ((keyWord !== '') && (foundMoviesArray.length === 0)) {

      setNothingFound(true);

    } else setNothingFound(false);

  }, [foundMoviesArray]);

  return (<>
    <SearchForm filterOn={filterOn}
                setFilterOn={setFilterOn}
                keyWord={keyWord}
                setKeyWord={setKeyWord}
                nothingFound={nothingFound}/>
    {loading ? (<Preloader/>) : (<MoviesCardList moviesArray={foundMoviesArray}
                                                 savedFilms={false}
                                                 onAddBtnClick={onAddBtnClick}
                                                 addBtnVisible={addBtnVisible}
                                                 currentMoviesAmount={currentMoviesAmount}/>)}
  </>);
}
