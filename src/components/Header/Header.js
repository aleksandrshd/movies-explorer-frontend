import {Link} from "react-router-dom";

import './Header.css'

export default function Header() {

  return (
    <header className="header">

      <div className="header__logo"></div>
      <div className="header__container">
        <Link className="header__link" to="/sign-in">Фильмы</Link>
        <Link className="header__link" to="/sign-up">Сохраненные фильмы</Link>
        <Link className="header__link" to="/sign-up">Аккаунт
        <div className="header__account-logo"></div></Link>
      </div>

    </header>
  );
}
