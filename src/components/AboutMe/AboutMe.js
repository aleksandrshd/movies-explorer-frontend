import './AboutMe.css'

export default function AboutMe() {

  return (
    <section className="student">
      <h2 className="student__header">Студент</h2>
      <div className="student__border"/>
      <div className="student__container">
        <div>
          <h3 className="project__title">Виталий</h3>
          <h3 className="project__title">Фронтенд-разработчик, 30 лет</h3>
          <p className="project__paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть
            жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
            «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
            постоянной работы.</p>
        </div>
        <div className="student__image"/>
      </div>
    </section>
  );
}
