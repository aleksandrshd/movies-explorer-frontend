import {useEffect, useState} from "react";
import {setDeviceTypeFn} from "../utils/utils";
import {DEVICE_TYPES, RESOLUTION_TYPES} from "../utils/constants";

const useCardsAmount = () => {

  const [deviceType, setDeviceType] = useState('');
  const [initCardsAmount, setInitCardsAmount] = useState(0);
  const [addCardsAmount, setAddCardsAmount] = useState(0);

  // Установка типа устройства в зависимости от ширины окна просмотра при первоначальной отрисовке страницы
  useEffect(() => {
    if (window.innerWidth < RESOLUTION_TYPES.mobile) {
      setDeviceType(DEVICE_TYPES.mobile);
    } else if ((window.innerWidth >= RESOLUTION_TYPES.mobile) && (window.innerWidth < RESOLUTION_TYPES.tablet)) {
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
      setInitCardsAmount(12);
      setAddCardsAmount(4);
    } else if (deviceType === DEVICE_TYPES.tablet) {
      setInitCardsAmount(8);
      setAddCardsAmount(2);
    } else if (deviceType === DEVICE_TYPES.mobile) {
      setInitCardsAmount(5);
      setAddCardsAmount(2);
    }
  }, [deviceType]);

  return { initCardsAmount, addCardsAmount };

};

export default useCardsAmount;
