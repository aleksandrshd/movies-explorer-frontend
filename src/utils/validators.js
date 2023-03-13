// регулярные выражения для валидаторов
const regexEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

// валидаторы
const validators = {
  name: {
    /*empty: (value) => {
      return value === '';
    },
    minLength: (value) => {
      return value.length < 2;
    },
    maxLength: (value) => {
      return value.length > 40;
    }*/
  },

  description: {
    empty: (value) => {
      return value === '';
    },
    minLength: (value) => {
      return value.length < 2;
    },
    maxLength: (value) => {
      return value.length > 200;
    }
  },

  email: {
    isEmail: (value) => {
      return !regexEmail.test(String(value).toLowerCase());
    }
  },

  password: {
    empty: (value) => {
      return value === '';
    },
    minLength: (value) => {
      return value.length < 6;
    }
  },
}

// тексты ошибок валидации
const textsOfErrors = {
  name: {
    emptyNameTextError: 'Введите имя'
  },
  email: {
    isEmailTextError: 'Введите корректный email'
  },
  password: {
    emptyTextError: 'Введите пароль',
    minLengthTextError: 'Введите пароль длиной не менее 6 символов'
  }
}

export {validators, textsOfErrors};
