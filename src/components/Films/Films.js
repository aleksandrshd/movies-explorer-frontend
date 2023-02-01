import './Films.css';
import film_1 from '../../images/film-1.png';

export default function Films() {
  return (
    <section className="films">
      <ul className="films__list">
        <li className="films__card">
          <img className="films__image"
                src={film_1}/>
          <div className="films__container">
            <h2 className="films__title">33 слова о дизайне</h2>
            <div>
              <button className="films__like-button"
                      type="button"/>
              <p className="films__like-counter"></p>
            </div>
          </div>
        </li>
        <li className="films__card">
          <img className="films__image"
               src={film_1}/>
          <div className="films__container">
            <h2 className="films__title">Киноальманах «100 лет дизайна»</h2>
            <div>
              <button className="films__like-button"
                      type="button"/>
              <p className="films__like-counter"></p>
            </div>
          </div>
        </li>
        <li className="films__card">
          <img className="films__image"
               src={film_1}/>
          <div className="films__container">
            <h2 className="films__title">В погоне за Бенкси</h2>
            <div>
              <button className="films__like-button"
                      type="button"/>
              <p className="films__like-counter"></p>
            </div>
          </div>
        </li>
        <li className="films__card">
          <img className="films__image"
               src={film_1}/>
          <div className="films__container">
            <h2 className="films__title">Пи Джей Харви: A dog called money</h2>
            <div>
              <button className="films__like-button"
                      type="button"/>
              <p className="films__like-counter"></p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
