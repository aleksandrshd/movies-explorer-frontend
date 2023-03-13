import {useEffect, useState} from "react";

import './SearchForm.css';

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {debounce} from "../../utils/utils";

export default function SearchForm() {

  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 640 ? setMobile(true) : setMobile(false);
  }, [])

  useEffect(() => {
    const sizeListener = debounce(640, setMobile, false, true);
    window.addEventListener('resize', sizeListener);
    return () => window.removeEventListener('resize', sizeListener);
  }, [mobile]);

  return (
    <div className="search">
      <form className="search__form">
        <div className="search__container search__container_input">
          <div className="search__logo"/>
          <input
            className="search__input"
            name="film"
            placeholder="Фильм"
            required/>
        </div>
        <div className="search__container">
          <button className="search__button">Найти</button>
          <div className="search__border"/>
          {!mobile && <FilterCheckbox/>}
        </div>
      </form>
      {mobile && <FilterCheckbox/>}
    </div>
  );

}
