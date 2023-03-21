import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({moviesArray, savedFilms}) {
  return (
      <section className="films">
        <ul className="films__list">
          {moviesArray.map(item => (
            <MoviesCard id={item.id} key={item.id} data={item} savedFilms={savedFilms}/>
          ))}
        </ul>
        {!savedFilms && <button className="films__button-more">Ещё</button>}
      </section>
  );
}
