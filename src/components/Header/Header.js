import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import './Header.css'


export default function Header({loggedIn}) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggler = () => setIsMenuOpen((state) => !state);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`header ${(location.pathname === "/main") ? 'header_blue' : ''}`}>

      <div
        className={`header__overlay ${isMenuOpen && 'header__overlay_opened'}`}
        onClick={closeMenu}
      />
      <Link className="header__link" to="/">
        <div className="header__logo"></div>
      </Link>
      {loggedIn && <nav
        className={`header__container ${loggedIn && 'header__container_loggedIn'} header__container_hidden ${isMenuOpen && 'header__container_opened'}`}>
        {isMenuOpen && <Link className="header__link" to="/">Главная</Link>}
        <Link className="header__link" to="/movies">Фильмы</Link>
        <Link className="header__link" to="/saved-movies">Сохранённые фильмы</Link>
        <Link className="header__link header__link_last" to="/profile">Аккаунт
          <div className="header__account-logo"></div></Link>
      </nav>}
      {!loggedIn && <nav className="header__container">
        <Link className="header__link_small-text header__link" to="/sign-up">Регистрация</Link>
        <Link className="header__link_small-text header__link header__link_green " to="/sign-in">Войти</Link>
      </nav>}
      {loggedIn && <button className={`header__btn-menu ${isMenuOpen && 'header__btn-menu_active'}`}
                           onClick={toggler}>
        <span className="header__span"></span>
        <span className="header__span"></span>
        <span className="header__span"></span>
      </button>}
    </header>
  );
}
