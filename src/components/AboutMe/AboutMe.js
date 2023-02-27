import './AboutMe.css'
import {Link} from "react-router-dom";

export default function AboutMe() {

  return (
    <section className="student" id="student">
      <h2 className="student__header">Студент</h2>
      <div className="student__border"/>
      <div className="student__container">
        <div>
          <h3 className="student__title">Виталий</h3>
          <h4 className="student__subtitle">Фронтенд-разработчик, 30 лет</h4>
          <p className="student__paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть
            жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в
            компании
            «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
            постоянной работы.</p>
          <p className="student__subparagraph">Github</p>
        </div>
        <div className="student__image"/>
      </div>
      <div className="student__portfolio">
        <h4 className="student__subtitle student__subtitle_grey">Портфолио</h4>
        <ul className="student__list">
          <li className="student__list-item">
            <a className="student__link" href="https://github.com/aleksandrshd/how-to-learn">
              <p className="student__link-text">Статичный сайт</p>
              <div className="student__link-logo"/>
            </a>
          </li>
          <li className="student__list-item">
            <a className="student__link" href="https://github.com/aleksandrshd/russian-travel">
              <p className="student__link-text">Адаптивный сайт</p>
              <div className="student__link-logo"/>
            </a>
          </li>
          <li className="student__list-item">
            <a className="student__link" href="https://github.com/aleksandrshd/react-mesto-api-full">
              <p className="student__link-text">Одностраничное приложение</p>
              <div className="student__link-logo"/>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
