import {useCallback, useEffect} from "react";

import './SearchForm.css';

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useSearchForm from "../../hooks/useSearchForm";
import useResize from "../../hooks/useResize";

export default function SearchForm({filterOn, setFilterOn, keyWord, setKeyWord, nothingFound}) {

    const {value, setValue, searchEmpty, handleChange, handleSubmit} = useSearchForm(setKeyWord);

    useEffect(() => {

        /*if (keyWord) setValue(keyWord);*/
        setValue(keyWord);

    }, [keyWord, setValue]);

    const toggleFilter = useCallback((e) => setFilterOn(e.target.checked), [setFilterOn]);

    const { checkboxUnderInput } = useResize();

    return (
        <div className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <div className="search__container search__container_input">
                    <div className="search__logo"/>
                    <input
                        className="search__input"
                        name="film"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        placeholder="Фильм"/>
                </div>
                <div className="search__container">
                    <button className="search__button">Найти</button>
                    <div className="search__border"/>
                    {!checkboxUnderInput && <FilterCheckbox value={filterOn} onChange={toggleFilter}/>}
                </div>
            </form>
            {!checkboxUnderInput && <span className="search__error">{searchEmpty && 'Введите ключевое слово'}</span>}
            {!checkboxUnderInput && <span className="search__error">{nothingFound && 'Ничего не найдено'}</span>}
            {checkboxUnderInput && <>
                <FilterCheckbox value={filterOn} onChange={toggleFilter}/>
                <span className="search__error">{searchEmpty && 'Введите ключевое слово'}</span>
                <span className="search__error">{nothingFound && 'Ничего не найдено'}</span>
            </>}
        </div>
    );

}
