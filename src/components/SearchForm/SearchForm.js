import './SearchForm.css';

export default function SearchForm() {
  return (
    <div className="search__container">
      <div className="search__logo"/>
      <input
        className="search__input"
        name="film"
        placeholder="Фильм"/>
      <button className="search__button">Найти</button>
      <button className="search__button-filter"></button>
      <p className="search__text-filter">Короткометражки</p>
    </div>
  );
}
