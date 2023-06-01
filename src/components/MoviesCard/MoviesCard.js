import { convertDuration, setIsLiked } from "../../utils/utils";

import './MoviesCard.css';

export default function MoviesCard({ card, savedFilms, onMovieLike, favouriteMovies }) {

  const { isLiked } = setIsLiked(card, favouriteMovies);

  const handleMovieLike = (event) => {
    onMovieLike(event, card, savedFilms);
  }

  return (
    <li className="movie">
      <a className="movie__link" href={card.trailerLink} target="_blank">
        <img className="movie__image"
             src={savedFilms ? `${card.image}` : `https://api.nomoreparties.co/${card.image.url}`}
             alt="Постер к фильму"/>
        <div className="movie__container">
          <h2 className="movie__title">{card.nameRU}</h2>
          <button
            className={`movie__like-button ${isLiked ? 'movie__like-button_liked' : ''} ${savedFilms ? 'movie__like-button_saved' : ''}`}
            type="button"
            onClick={handleMovieLike}/>
        </div>
        <p
          className="movie__duration">{convertDuration(card.duration).hours > 0 && `${convertDuration(card.duration).hours}ч `}{`${convertDuration(card.duration).minutes}м`}</p>
      </a>
    </li>
  );
}
