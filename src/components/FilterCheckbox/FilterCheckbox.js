import './FilterCheckbox.css';


export default function FilterCheckbox({ value, onChange }) {

  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input className="checkbox__button" type="checkbox" checked={value} onChange={onChange}/>
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );

}
