import {Link} from "react-router-dom";

import './Header.css'

export default function Header({loggedIn}) {

  return (
    <header className={`header ${loggedIn ? '' : 'header_blue'}`}>

      <Link className="header__link" to="/"><div className="header__logo"></div></Link>
      {loggedIn && <div className="header__container">
        <Link className="header__link" to="/movies">Фильмы</Link>
        <Link className="header__link" to="/saved-movies">Сохраненные фильмы</Link>
        <Link className="header__link header__link_last" to="/profile">Аккаунт
          <div className="header__account-logo"></div></Link>
      </div>}
      {!loggedIn && <div className="header__container">
        <Link className="header__link_small-text header__link" to="/sign-up">Регистрация</Link>
        <Link className="header__link header__link_green header__link_small-text" to="/sign-in">Войти</Link>
      </div>}

    </header>
  );
}
