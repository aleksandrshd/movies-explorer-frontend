import {useEffect, useState} from "react";

import './SearchForm.css';

import RadioButton from "../RadioButton/RadioButton";
import { debounce } from "../../utils/utils";

export default function SearchForm() {

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const sizeListener = debounce(640, setMobile, false, true);
    window.addEventListener('resize', sizeListener);
    return () => window.removeEventListener('resize', sizeListener);
  }, [mobile]);

  return (
    <div className="search">
      <div className="search__form">
        <div className="search__container">
          <div className="search__logo"/>
          <input
            className="search__input"
            name="film"
            placeholder="Фильм"/>
        </div>
        <div className="search__container">
          <button className="search__button">Найти</button>
          <div className="search__border"/>
          {!mobile && <RadioButton />}
        </div>
      </div>
      {mobile && <RadioButton/>}
    </div>
  );

}
