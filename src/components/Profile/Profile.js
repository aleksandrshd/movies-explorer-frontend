import './Profile.css'


export default function Profile() {

  return (<form className="profile__form"
                noValidate>
    <h2 className="profile__header">Привет, Виталий!</h2>
    <div className="profile__container">
      <label className="profile__label" htmlFor="email">Имя</label>
      <input
        className="profile__input"
        name="name"/>
    </div>
    <div className="profile__border"></div>
    <div className="profile__container">
      <label className="profile__label" htmlFor="email">E-mail</label>
      <input
        className="profile__input"
        type="email"
        name="name"/>
    </div>
    <span className="profile__error"></span>
    <button className="profile__button">Редактировать</button>
    <button className="profile__button profile__button-exit">Выйти из аккаунта</button>
  </form>);

}
