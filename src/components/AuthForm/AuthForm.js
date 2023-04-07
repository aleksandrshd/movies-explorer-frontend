import { useCallback, useEffect, useState } from "react";

import { Link, Redirect } from "react-router-dom";

import './AuthForm.css'

import { textsOfErrors, validators } from "../../utils/validators";
import {INITIAL_STATES} from "../../utils/constants";


export default function AuthForm({ loggedIn, isRegister, errorMessage, onSubmit }) {

  const [formData, setFormData] = useState({});
  const [formDataClicked, setFormDataClicked] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const [textNameError, setTextNameError] = useState('');
  const [textEmailError, setTextEmailError] = useState('');
  const [textPasswordError, setTextPasswordError] = useState('');

  const [isInvalid, setIsInvalid] = useState(true);

  useEffect(() => {
    if (isRegister) {
      setFormData(INITIAL_STATES.REGISTER.FORM_DATA);
      setFormDataClicked(INITIAL_STATES.REGISTER.CLICKED_DATA);
      setFormErrors(INITIAL_STATES.REGISTER.ERRORS_DATA);
    } else {
      setFormData(INITIAL_STATES.LOGIN.FORM_DATA);
      setFormDataClicked(INITIAL_STATES.LOGIN.CLICKED_DATA);
      setFormErrors(INITIAL_STATES.LOGIN.ERRORS_DATA);
    }
  }, [isRegister]);

  useEffect(() => {
    if (isRegister) {
      setFormData(INITIAL_STATES.REGISTER.FORM_DATA);
      setFormDataClicked(INITIAL_STATES.REGISTER.CLICKED_DATA);
      setFormErrors(INITIAL_STATES.REGISTER.ERRORS_DATA);
    } else {
      setFormData(INITIAL_STATES.LOGIN.FORM_DATA);
      setFormDataClicked(INITIAL_STATES.LOGIN.CLICKED_DATA);
      setFormErrors(INITIAL_STATES.LOGIN.ERRORS_DATA);
    }
  }, [isRegister]);

  useEffect(() => {
    const formKeys = Object.keys(formData);

    const allErrors = formKeys.map(key => {
      const valueByKey = formData[key];
      if (!validators[key]) {
        return {};
      }
      const errors = Object.entries(validators[key]).map(([errorKey, validatorFn]) => {
        return {[errorKey]: validatorFn(valueByKey)};
      }).reduce((acc, item) => ({...acc, ...item}), {});
      return {[key]: errors};

    }).reduce((acc, item) => ({...acc, ...item}), {});

    setFormErrors(allErrors);

  }, [formData, setFormErrors]);

  useEffect(() => {
    for (const fieldKey in formErrors) {
      const keyErrors = formErrors[fieldKey];
      for (const errorKey in keyErrors) {
        if (keyErrors[errorKey] === true) {
          return setIsInvalid(true);
        }
      }
    }

    setIsInvalid(false);

  }, [formErrors, setIsInvalid]);

  useEffect(() => {

    if (isRegister) {
      if (formDataClicked.name) {
        if (formErrors.name.empty) {
          setTextNameError(textsOfErrors.name.emptyNameTextError);
        } else if (formErrors.name.minLength) {
          setTextNameError(textsOfErrors.name.minLengthNameTextError);
        } else if (formErrors.name.maxLength) {
          setTextNameError(textsOfErrors.name.maxLengthNameTextError);
        } else setTextNameError('');
      }
    }

    if (formDataClicked.email) {
      if (formErrors.email.isEmail) {
        setTextEmailError(textsOfErrors.email.isEmailTextError);
      } else setTextEmailError('');
    }

    if (formDataClicked.password) {
      if (formErrors.password.empty) {
        setTextPasswordError(textsOfErrors.password.emptyTextError);
      } else if (formErrors.password.minLength) {
        setTextPasswordError(textsOfErrors.password.minLengthTextError);
      } else setTextPasswordError('');
    }
  }, [formErrors, formDataClicked, isRegister]);

  const cbChange = useCallback((event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData, [name]: value
    });

  }, [formData]);

  const cbBlur = useCallback((event) => {
    const name = event.target.name;
    setFormDataClicked({
      ...formDataClicked, [name]: true
    });
  }, [formDataClicked]);

  const cbSubmit = useCallback((event) => {
    event.preventDefault();
    const {name, email, password} = formData;
    onSubmit(name, email, password);
  }, [onSubmit, formData]);

  if (loggedIn) {
    return <Redirect to="/movies"/>;
  }

  return (
    <form className="register"
          onSubmit={cbSubmit}
          noValidate>
      <div className="register__logo"></div>
      <h2 className="register__header">{isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h2>
      {isRegister && <>
        <label className="register__label" htmlFor="name">Имя</label>
        <input
          className="register__input"
          name="name"
          id="name"
          value={formData.name}
          onChange={cbChange}
          onBlur={cbBlur}/>
      </>}
      <label className="register__label" htmlFor="email">E-mail</label>
      <input
        className="register__input"
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={cbChange}
        onBlur={cbBlur}/>
      <label className="register__label" htmlFor="password">Пароль</label>
      <input
        className="register__input"
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={cbChange}
        onBlur={cbBlur}/>
      <span className="register__error">{textNameError}</span>
      <span className="register__error">{textEmailError}</span>
      <span className="register__error">{textPasswordError}</span>
      <span className="register__error">{errorMessage}</span>
      <button className={`register__button ${isInvalid ? 'register__button_disabled' : ''}`}
              disabled={isInvalid}>{isRegister ? 'Зарегистрироваться' : 'Войти'}</button>
      {isRegister && <p className="register__caption">Уже зарегистрированы? <Link className="register__link"
                                                                                  to="/sign-in">Войти</Link>
      </p>}
      {!isRegister && <p className="register__caption">Ещё не зарегистрированы? <Link className="register__link"
                                                                                      to="/sign-up">Регистрация</Link>
      </p>}
    </form>
  );
}
