import './Profile.css'
import {useCallback, useContext, useEffect, useMemo, useState} from "react";
import {textsOfErrors, validators} from "../../utils/validators";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

export default function Profile({errorMessage, onSubmit, onLogout}) {

  const currentUser = useContext(CurrentUserContext);

  const [formData, setFormData] = useState({
      name: currentUser.name || '',
      email: currentUser.email || ''
    }
  );

  const [formDataClicked, setFormDataClicked] = useState({
      name: false,
      email: false,
    }
  );

  const [formErrors, setFormErrors] = useState({
    name: {
      empty: true,
      minLength: true,
      maxLength: false
    },
    email: {
      isEmail: true
    }
  });

  const [textNameError, setTextNameError] = useState('');
  const [textEmailError, setTextEmailError] = useState('');

  const [isInvalid, setIsInvalid] = useState(true);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isReqInProgress, setIsReqInProgress] = useState(false);

  const isUserDataSimilar = useMemo(() => { return currentUser.name === formData.name && currentUser.email === formData.email }, [currentUser, formData]);

  const isSubmitDisabled = useMemo(() => { return isInvalid || isUserDataSimilar || isReqInProgress }, [isInvalid, isUserDataSimilar, isReqInProgress]);

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

    if (formErrors.name.empty && formDataClicked.name) {
      setTextNameError(textsOfErrors.name.emptyNameTextError);
    } else setTextNameError('');

    if (formErrors.email.isEmail && formDataClicked.email) {
      setTextEmailError(textsOfErrors.email.isEmailTextError);
    } else setTextEmailError('');

  }, [formErrors, formDataClicked]);

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

  const cbSubmit = useCallback(async (event) => {
    setIsReqInProgress(true);
    event.preventDefault();
    const {name, email} = formData;
    await onSubmit(name, email);
    setIsSubmitted(true);
    setIsReqInProgress(false);
  }, [onSubmit, formData]);

  return (
    <form className="profile"
          onSubmit={cbSubmit}
          noValidate>
      <div className="profile__container">
        <h2 className="profile__header">Привет, {currentUser.name}!</h2>
        <div className="profile__field">
          <label className="profile__label" htmlFor="name">Имя</label>
          <input
            className="profile__input"
            name="name"
            id="name"
            value={formData.name}
            onChange={cbChange}
            onBlur={cbBlur}
            disabled={isReqInProgress}/>
        </div>
        <div className="profile__border"></div>
        <div className="profile__field">
          <label className="profile__label" htmlFor="email">E-mail</label>
          <input
            className="profile__input"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={cbChange}
            onBlur={cbBlur}
            disabled={isReqInProgress}/>
        </div>
      </div>
      <div className="profile__container">
        <span className="profile__text profile__text_red">{textNameError}</span>
        <span className="profile__text profile__text_red">{textEmailError}</span>
        <span
          className={`profile__text ${errorMessage ? 'profile__text_red' : ''}`}>{isSubmitted && (errorMessage || 'Данные профиля обновлены')}
      </span>
      <button className={`profile__button ${isSubmitDisabled ? 'profile__button_disabled' : ''}`}
              disabled={isSubmitDisabled}>Редактировать
      </button>
      <button className="profile__button profile__button-exit"
              onClick={onLogout}>Выйти из аккаунта
      </button>
    </div>
</form>)
  ;

}
