import { useContext, useEffect, useState } from "react";

import useCardsDisplay from "../../hooks/useCardsAmmount";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { getAllDefaultMovies } from "../../utils/utils";
import useFilteredMovies from "../../hooks/useFilteredMovies";

export default function Movies({ getDefaultMovies }) {

  const currentUser = useContext(CurrentUserContext);
  const storageKey = currentUser._id;

  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Загрузка списка всех фильмов в начале работы страницы единожды
  useEffect(() => {
    const getAllMovies = async () => {
      const movies = await getAllDefaultMovies(getDefaultMovies, setLoading);
      setAllMovies(movies);
    }
    getAllMovies();
  }, [getDefaultMovies]);

  // Получение массива отфильтрованных карточек, значений и установщиков значений фильтров по ключевому слову и
  // продолжительности, и отсутствия результатов поиска
  const {
    filterOn,
    setFilterOn,
    keyWord,
    setKeyWord,
    foundMoviesArray,
    nothingFound
  } = useFilteredMovies(allMovies, storageKey);

  // Получение текущего массива отображаемых карточек, обработчика нажатия на кнопку еще и состояния видимости кнопки ещё
  const { displayMovies, onAddBtnClick, addBtnVisible } = useCardsDisplay(foundMoviesArray);

  return (<>
    <SearchForm filterOn={filterOn}
                setFilterOn={setFilterOn}
                keyWord={keyWord}
                setKeyWord={setKeyWord}
                nothingFound={nothingFound}/>
    {loading ? (<Preloader/>) : (<MoviesCardList displayMovies={displayMovies}
                                                 savedFilms={false}
                                                 onAddBtnClick={onAddBtnClick}
                                                 addBtnVisible={addBtnVisible}/>)}
  </>);
}
