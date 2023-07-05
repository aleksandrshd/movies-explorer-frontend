import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({displayMovies, savedFilms, onAddBtnClick, addBtnVisible, onMovieLike, favouriteMovies}) {

  return (
    <section className="films">
      <ul className="films__list">
        {displayMovies.map(card => (
          <MoviesCard id={card.id} key={savedFilms? card._id : card.id} card={card} savedFilms={savedFilms} onMovieLike={onMovieLike} favouriteMovies={favouriteMovies}/>
        ))}
      </ul>
      {!savedFilms && addBtnVisible && <button className="films__button-more" onClick={onAddBtnClick}>Ещё</button>}
    </section>
  );
}
