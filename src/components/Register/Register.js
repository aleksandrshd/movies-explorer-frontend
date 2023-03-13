import {Link} from "react-router-dom";

import './Register.css'


export default function Register() {

  return (
    <form className="register"
          noValidate>
      <div className="register__logo"></div>
      <h2 className="register__header">Добро пожаловать!</h2>
      <label className="register__label" htmlFor="name">Имя</label>
      <input
        className="register__input"
        name="name"
        id="name"/>
      <label className="register__label" htmlFor="email">E-mail</label>
      <input
        className="register__input"
        type="email"
        name="email"
        id="email"/>
      <label className="register__label" htmlFor="password">Пароль</label>
      <input
        className="register__input"
        type="password"
        name="password"
        id="password"/>
      <span className="register__error">Что-то пошло не так ...</span>
      <button className="register__button">Зарегистрироваться</button>
      <p className="register__caption">Уже зарегистрированы? <Link className="register__link" to="/sign-in">Войти</Link>
      </p>
    </form>
  );
}
