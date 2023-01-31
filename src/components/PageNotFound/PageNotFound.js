import {Link} from "react-router-dom";

import './PageNotFound.css'

export default function PageNotFound () {
  return (
    <div className="not-found">
      <h1 className="not-found__header">404</h1>
      <p className="not-found__paragraph">Страница не найдена</p>
      <Link className="not-found__link" to="/">Назад</Link>
    </div>
  );
}
