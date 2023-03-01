import './SearchForm.css';

export default function SearchForm() {

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
        <label className="search__label">
          <input className="search__button-filter" type="checkbox"/>
        </label>
        <p className="search__text-filter">Короткометражки</p>
      </div>
      </div>
    </div>
  );

}
