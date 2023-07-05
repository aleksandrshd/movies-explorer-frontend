import {useHistory} from "react-router-dom";

import './PageNotFound.css'

export default function PageNotFound() {

    let history = useHistory();

    return (
        <div className="not-found">
            <h1 className="not-found__header">404</h1>
            <p className="not-found__paragraph">Страница не найдена</p>
            <button className="not-found__button" onClick={history.goBack}>Назад</button>
        </div>
    );
}
