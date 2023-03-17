import './MoviesCard.css';
import {convertDuration} from "../../utils/utils";

export default function MoviesCard({data, isLiked, savedFilms}) {
  return (
    <li className="movie">
      <img className="movie__image"
           src={`https://api.nomoreparties.co/${data.image.url}`}
           alt="Постер к фильму"/>
      <div className="movie__container">
        <h2 className="movie__title">{data.nameRU}</h2>
        <button className={`movie__like-button ${isLiked ? 'movie__like-button_liked' : ''} ${savedFilms ? 'movie__like-button_saved' : ''}`}
                type="button"/>
      </div>
      <p className="movie__duration">{convertDuration(data.duration).hours > 0 && `${convertDuration(data.duration).hours}ч `}{ `${convertDuration(data.duration).minutes}м`}</p>
    </li>
  );
}
