import './MoviesCard.css';

export default function MoviesCard({poster, title, duration}) {
  return (
    <li className="movies__card">
      <img className="movies__image"
           src={poster}/>
      <div className="movies__container">
        <h2 className="movies__title">{title}</h2>
        <button className="movies__like-button"
                type="button"/>
      </div>
      <p className="movies__duration">{duration}</p>
    </li>
  );
}
