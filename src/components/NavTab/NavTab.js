import './NavTab.css'

export default function NavTab() {

  return (
    <section className="navtab">
      <ul className="navtab__list">
        <li className="navtab__list-element">
          <a className="navtab__link" href="#about_project">О проекте</a>
        </li>
        <li className="navtab__list-element">
          <a className="navtab__link" href="#techs">Технологии</a>
        </li>
        <li className="navtab__list-element">
          <a className="navtab__link" href="#student">Студент</a>
        </li>
      </ul>
    </section>
  );
}
