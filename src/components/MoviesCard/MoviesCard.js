import './MoviesCard.css';

export default function MoviesCard({data, isLiked, savedFilms}) {
  return (
    <li className="movie">
      <img className="movie__image"
           src={data.image}
           alt="Постер к фильму"/>
      <div className="movie__container">
        <h2 className="movie__title">{data.nameRU}</h2>
        <button className={`movie__like-button ${isLiked ? 'movie__like-button_liked' : ''} ${savedFilms ? 'movie__like-button_saved' : ''}`}
                type="button"/>
      </div>
      <p className="movie__duration">{data.duration}</p>
    </li>
  );
}
