import {useCallback, useEffect, useState} from "react";

import './SearchForm.css';

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {debounce} from "../../utils/utils";
import useSearchForm from "../../hooks/useSearchForm";

export default function SearchForm({ filterOn, setFilterOn, keyWord, setKeyWord }) {

  const { value, setValue, searchEmpty, handleChange, handleSubmit } = useSearchForm(setKeyWord);

  useEffect(() => {
    if (keyWord) setValue(keyWord);
    console.log(value);
  }, [keyWord]);

  const toggleFilter = useCallback((e) => setFilterOn(e.target.checked), []);

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
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__container search__container_input">
          <div className="search__logo"/>
          <input
            className="search__input"
            name="film"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Фильм"/>
        </div>
        <div className="search__container">
          <button className="search__button">Найти</button>
          <div className="search__border"/>
          {!mobile && <FilterCheckbox value={filterOn} onChange={toggleFilter}/>}
        </div>
      </form>
      {mobile && <FilterCheckbox value={filterOn} onChange={toggleFilter}/>}
      <span className="search__error">{searchEmpty && 'Введите ключевое слово'}</span>
    </div>
  );

}
