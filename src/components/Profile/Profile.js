import './Profile.css'

export default function Profile({onLogout}) {

  return (
    <form className="profile"
          noValidate>
      <h2 className="profile__header">Привет, Виталий!</h2>
      <div className="profile__container">
        <label className="profile__label" htmlFor="name">Имя</label>
        <input
          className="profile__input"
          name="name"
          id="name"/>
      </div>
      <div className="profile__border"></div>
      <div className="profile__container">
        <label className="profile__label" htmlFor="email">E-mail</label>
        <input
          className="profile__input"
          type="email"
          name="name"
          id="email"/>
      </div>
      <span className="profile__error"></span>
      <button className="profile__button">Редактировать</button>
      <button className="profile__button profile__button-exit"
              onClick={onLogout}>Выйти из аккаунта
      </button>
    </form>);

}
