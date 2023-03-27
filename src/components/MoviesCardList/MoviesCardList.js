import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({displayMovies, savedFilms, onAddBtnClick, addBtnVisible}) {

  return (
    <section className="films">
      <ul className="films__list">
        {displayMovies.map(item => (
          <MoviesCard id={item.id} key={item.id} data={item} savedFilms={savedFilms}/>
        ))}
      </ul>
      {!savedFilms && addBtnVisible && <button className="films__button-more" onClick={onAddBtnClick}>Ещё</button>}
    </section>
  );
}
