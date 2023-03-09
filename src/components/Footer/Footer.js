import './Footer.css'

export default function Footer() {

  return (
    <footer className="footer">

      <h2 className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__copyright">&copy;2023</p>
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/" target="_blank">Github</a>
        </div>
      </div>

    </footer>
  );
}
