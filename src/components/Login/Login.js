import {Link} from "react-router-dom";

import './Login.css'


export default function Login() {

  return (<form className="login__form"
                noValidate>
    <div className="login__logo"></div>
    <h2 className="login__header">Рады видеть!</h2>
    <label className="login__label" htmlFor="email">E-mail</label>
    <input
      className="login__input"
      type="email"
      name="email"/>
    <span className="login__error"></span>
    <label className="login__label" htmlFor="password">Пароль</label>
    <input
      className="login__input"
      type="password"
      name="password"/>
    <span className="login__error"></span>
    <button className="login__button">Войти</button>
    <p className="login__caption">Ещё не зарегистрированы? <Link className="login__link" to="/sign-in">Регистрация</Link>
    </p>
  </form>);

}
