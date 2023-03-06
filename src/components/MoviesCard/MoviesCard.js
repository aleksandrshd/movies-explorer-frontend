import './MoviesCard.css';

export default function MoviesCard({data, isLiked, savedFilms}) {
  return (
    <li className="movies__card">
      <img className="movies__image"
           src={data.image}/>
      <div className="movies__container">
        <h2 className="movies__title">{data.nameRU}</h2>
        <button className={`movies__like-button ${isLiked ? 'movies__like-button_liked' : ''} ${savedFilms ? 'movies__like-button_saved' : ''}`}
                type="button"/>
      </div>
      <p className="movies__duration">{data.duration}</p>
    </li>
  );
}
