import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({moviesArray, savedFilms, onAddBtnClick, addBtnVisible, currentMoviesAmount}) {

  const displayMovies = [];

  if ((moviesArray.length > 0) && (moviesArray.length >= currentMoviesAmount)) {
    for (let i = 0; i < currentMoviesAmount; i++) {
      displayMovies.push(<MoviesCard id={moviesArray[i].id} key={moviesArray[i].id} data={moviesArray[i]}
                                     savedFilms={savedFilms}/>);
    }
  }
  return (
    <section className="films">
      <ul className="films__list">
        {displayMovies}
      </ul>
      {!savedFilms && addBtnVisible && <button className="films__button-more" onClick={onAddBtnClick}>Ещё</button>}
    </section>
  );
}
