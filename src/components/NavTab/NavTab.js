import {Link} from "react-router-dom";

import './NavTab.css'

export default function NavTab() {

  return (
    <section className="navtab">
      <ul className="navtab__list">
        <li className="navtab__list-element">
          <Link className="navtab__link" to="/sign-in">О проекте</Link>
        </li>
        <li className="navtab__list-element">
          <Link className="navtab__link" to="/sign-in">Технологии</Link>
        </li>
        <li className="navtab__list-element">
          <Link className="navtab__link" to="/sign-in">Студент</Link>
        </li>
      </ul>
    </section>
  );
}
