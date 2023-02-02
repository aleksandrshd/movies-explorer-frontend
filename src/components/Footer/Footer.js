import './Footer.css'

export default function Footer() {

  return (
    <footer className="footer">

      <h2 className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>
        <div>
          <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/">Github</a>
        </div>
      </div>

    </footer>
  );
}
