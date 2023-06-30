import { useEffect, useState } from "react";
import { setDeviceTypeFn } from "../utils/utils";
import {DEVICE_TYPES, INIT_ADD_CARDS, RESOLUTION_TYPES} from "../utils/constants";

const useCardsDisplay = (foundMoviesArray) => {

  const [deviceType, setDeviceType] = useState('');
  const [initCardsAmount, setInitCardsAmount] = useState(0);
  const [addCardsAmount, setAddCardsAmount] = useState(0);
  const [currentMoviesAmount, setCurrentMoviesAmount] = useState(0);
  const [addBtnVisible, setAddBtnVisible] = useState(true);
  const [displayMovies, setDisplayMovies] = useState([]);

  // Установка типа устройства в зависимости от ширины окна просмотра при первоначальной отрисовке страницы
  useEffect(() => {

    if (window.innerWidth < RESOLUTION_TYPES.mobile) {

      setDeviceType(DEVICE_TYPES.mobile);

    } else if ((window.innerWidth >= RESOLUTION_TYPES.mobile) && (window.innerWidth <= RESOLUTION_TYPES.tablet)) {

      setDeviceType(DEVICE_TYPES.tablet);

    } else if (window.innerWidth >= RESOLUTION_TYPES.tablet) {

      setDeviceType(DEVICE_TYPES.desktop);

    }

  }, []);

  // Установка типа устройства в зависимости от ширины окна просмотра при изменении ширины окна просмотра
  useEffect(() => {

    const sizeListener = setDeviceTypeFn(RESOLUTION_TYPES.mobile, RESOLUTION_TYPES.tablet, setDeviceType);

    window.addEventListener('resize', sizeListener);

    return () => window.removeEventListener('resize', sizeListener);

  }, [deviceType]);

  // Установка исходного и догружаемого при нажатии кнопки еще количества карточек
  useEffect(() => {

    if (deviceType === DEVICE_TYPES.desktop) {

      setInitCardsAmount(INIT_ADD_CARDS.desktop.init);
      setAddCardsAmount(INIT_ADD_CARDS.desktop.add);

    } else if (deviceType === DEVICE_TYPES.tablet) {

      setInitCardsAmount(INIT_ADD_CARDS.tablet.init);
      setAddCardsAmount(INIT_ADD_CARDS.tablet.add);

    } else if (deviceType === DEVICE_TYPES.mobile) {

      setInitCardsAmount(INIT_ADD_CARDS.mobile.init);
      setAddCardsAmount(INIT_ADD_CARDS.mobile.add);

    }

  }, [deviceType]);

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

  // Установка массива отображаемых фильмов
  useEffect(() => {

    setDisplayMovies(foundMoviesArray.slice(0, currentMoviesAmount));

  }, [foundMoviesArray, currentMoviesAmount]);

  // Обработчик нажатия на кнопку еще
  const onAddBtnClick = () => {

    if (foundMoviesArray.length < currentMoviesAmount + addCardsAmount) {

      setCurrentMoviesAmount(foundMoviesArray.length);
      setAddBtnVisible(false);

    } else setCurrentMoviesAmount(currentMoviesAmount + addCardsAmount);

  };

  return { displayMovies, onAddBtnClick, addBtnVisible };

};

export default useCardsDisplay;
