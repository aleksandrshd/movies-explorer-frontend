import './MoviesCardList.css';

import film1 from '../../images/film1.png';
import film2 from '../../images/film2.png';
import film3 from '../../images/film3.png';
import film4 from '../../images/film4.png';
import film5 from '../../images/film5.png';
import film6 from '../../images/film6.png';
import film7 from '../../images/film7.png';
import film8 from '../../images/film8.png';
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
  return (
      <section className="films">
        <ul className="films__list">
          <MoviesCard poster={film1} title="33 слова о дизайне" duration="1ч 42м"/>
          <MoviesCard poster={film2} title="Киноальманах «100 лет дизайна»" duration="1ч 42м"/>
          <MoviesCard poster={film3} title="В погоне за Бенкси" duration="1ч 42м"/>
          <MoviesCard poster={film4} title="Баския: Взрыв реальности" duration="1ч 42м"/>
          <MoviesCard poster={film5} title="Бег это свобода" duration="1ч 42м"/>
          {/*<MoviesCard poster={film6} title="Книготорговцы" duration="1ч 42м"/>
          <MoviesCard poster={film7} title="Когда я думаю о Германии ночью" duration="1ч 42м"/>
          <MoviesCard poster={film8} title="Gimme Danger: История Игги и The Stooges" duration="1ч 42м"/>*/}
        </ul>
        <button className="films__button-more">Ещё</button>
      </section>
  );
}
