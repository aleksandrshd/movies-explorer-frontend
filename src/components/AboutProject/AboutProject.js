import './AboutProject.css'

export default function AboutProject() {

  return (
    <section className="project">
      <h2 className="project__header">О проекте</h2>
      <div className="project__container">
        <div>
          <h3 className="project__title">Дипломный проект включал 5 этапов</h3>
          <p className="project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности
            и финальные доработки.</p>
        </div>
        <div>
          <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
            чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="project__duration-container">
        <p className="project__duration-back">1 неделя</p>
        <p className="project__duration-front">4 недели</p>
      </div>
    </section>
  );
}
