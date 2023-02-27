import './Movies.css';

import film1 from '../../images/film1.png';
import film2 from '../../images/film2.png';
import film3 from '../../images/film3.png';
import film4 from '../../images/film4.png';
import film5 from '../../images/film5.png';
import film6 from '../../images/film6.png';
import film7 from '../../images/film7.png';
import film8 from '../../images/film8.png';

export default function Movies() {
  return (
      <section className="films">
        <ul className="films__list">
          <li className="films__card">
            <img className="films__image"
                 src={film1}/>
            <div className="films__container">
              <h2 className="films__title">33 слова о дизайне</h2>
              <button className="films__like-button"
                      type="button"/>
            </div>
            <p className="films__duration">1ч 42м</p>
          </li>
          <li className="films__card">
            <img className="films__image"
                 src={film2}/>
            <div className="films__container">
              <h2 className="films__title">Киноальманах «100 лет дизайна»</h2>
              <button className="films__like-button"
                      type="button"/>
            </div>
            <p className="films__duration">1ч 42м</p>
          </li>
          <li className="films__card">
            <img className="films__image"
                 src={film3}/>
            <div className="films__container">
              <h2 className="films__title">В погоне за Бенкси</h2>
              <button className="films__like-button"
                      type="button"/>
            </div>
            <p className="films__duration">1ч 42м</p>
          </li>
          <li className="films__card">
            <img className="films__image"
                 src={film4}/>
            <div className="films__container">
              <h2 className="films__title">Баския: Взрыв реальности</h2>
              <button className="films__like-button"
                      type="button"/>
            </div>
            <p className="films__duration">1ч 42м</p>
          </li>
          <li className="films__card">
            <img className="films__image"
                 src={film5}/>
            <div className="films__container">
              <h2 className="films__title">Бег это свобода</h2>
              <button className="films__like-button"
                      type="button"/>
            </div>
            <p className="films__duration">1ч 42м</p>
          </li>
          <li className="films__card">
            <img className="films__image"
                 src={film6}/>
            <div className="films__container">
              <h2 className="films__title">Книготорговцы</h2>
              <button className="films__like-button"
                      type="button"/>
            </div>
            <p className="films__duration">1ч 42м</p>
          </li>
          <li className="films__card">
            <img className="films__image"
                 src={film7}/>
            <div className="films__container">
              <h2 className="films__title">Когда я думаю о Германии ночью</h2>
              <button className="films__like-button"
                      type="button"/>
            </div>
            <p className="films__duration">1ч 42м</p>
          </li>
          <li className="films__card">
            <img className="films__image"
                 src={film8}/>
            <div className="films__container">
              <h2 className="films__title">Gimme Danger: История Игги и The Stooges</h2>
              <button className="films__like-button"
                      type="button"/>
            </div>
            <p className="films__duration">1ч 42м</p>
          </li>
        </ul>
        <button className="films__button-more">Ещё</button>
      </section>
  );
}
