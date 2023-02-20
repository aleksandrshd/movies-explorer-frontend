import {Link} from "react-router-dom";

import './Header.css'

export default function Header({loggedIn}) {

  return (
    <header className={`header ${loggedIn ? '' : 'header_blue'}`}>

      <div className="header__logo"></div>
      {loggedIn && <div className="header__container">
        <Link className="header__link" to="/sign-in">Фильмы</Link>
        <Link className="header__link" to="/sign-up">Сохраненные фильмы</Link>
        <Link className="header__link header__link_last" to="/sign-up">Аккаунт
        <div className="header__account-logo"></div></Link>
      </div>}
      {!loggedIn && <div className="header__container">
        <Link className="header__link header__link_small-text" to="/sign-up">Регистрация</Link>
        <div className="header__link-container">
          <Link className="header__link header__link_green header__link_small-text" to="/sign-in">Войти</Link>
        </div>
      </div>}

    </header>
  );
}
