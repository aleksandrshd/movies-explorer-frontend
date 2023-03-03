import './RadioButton.css';


export default function RadioButton() {

  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input className="checkbox__button" type="checkbox"/>
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );

}
