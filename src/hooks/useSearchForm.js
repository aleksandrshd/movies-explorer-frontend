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
    if (value === '') {
      setSearchEmpty(true);
      return;
    }
    setSearchEmpty(false);
    setKeyWord(value);
  };

  return { value, setValue, searchEmpty, handleChange, handleSubmit };
};

export default useSearchForm;
