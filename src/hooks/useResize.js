import {useEffect, useState} from "react";
import {debounce} from "../utils/utils";
import {SEARCHFORM_CHECKBOX_WIDTH} from "../utils/constants";

const useResize = () => {

    const [checkboxUnderInput, setCheckboxUnderInput] = useState(false);

    // Установка значения положения чекбокса короткометражек в зависимости от ширины окна просмотра при первоначальной отрисовке страницы
    useEffect(() => {

        window.innerWidth < SEARCHFORM_CHECKBOX_WIDTH ? setCheckboxUnderInput(true) : setCheckboxUnderInput(false);

    }, [])

    // Установка значения положения чекбокса короткометражек в зависимости от ширины окна просмотра при изменении ширины окна просмотра
    useEffect(() => {

        const sizeListener = debounce(SEARCHFORM_CHECKBOX_WIDTH, setCheckboxUnderInput, false, true);

        window.addEventListener('resize', sizeListener);

        return () => window.removeEventListener('resize', sizeListener);

    }, [checkboxUnderInput]);

    return { checkboxUnderInput };

}

export default useResize;