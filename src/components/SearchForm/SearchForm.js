import {useState} from "react";

import './SearchForm.css';

import RadioButton from "../RadioButton/RadioButton";

export default function SearchForm() {

  const [mobile, setMobile] = useState(true);

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
