import { useState } from 'react';

const useSearchForm = (setKeyWord) => {
  const [value, setValue] = useState('');
  const [searchEmpty, setSearchEmpty] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    setSearchEmpty(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyWord(value);
    if (value === '') {
      setSearchEmpty(true);
    } else {
      setSearchEmpty(false);
    }
  };

  return { value, setValue, searchEmpty, handleChange, handleSubmit };
};

export default useSearchForm;
