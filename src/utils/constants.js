export const savedMoviesArray = [
  {
    "id": 1,
    "image": "https://i.ibb.co/t2bGtpZ/film1.png",
    "nameRU": "33 слова о дизайне",
    "duration": "1ч 42м"
  },
  {
    "id": 2,
    "image": "https://i.ibb.co/qWY9tKn/film2.png",
    "nameRU": "Киноальманах «100 лет дизайна»",
    "duration": "1ч 42м"
  },
  {
    "id": 3,
    "image": "https://i.ibb.co/ggt4Scn/film3.png",
    "nameRU": "В погоне за Бенкси",
    "duration": "1ч 42м"
  }
];

export const CHANGE_USERDATA_ERROR_MESSAGE = 'При обновлении данных профиля произошла ошибка.';

export const LOAD_MOVIES_ERROR_MESSAGE =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';

export const ALL_MOVIES_KEY = 'allMovies';

export const INITIAL_STATES = {
  REGISTER: {
    FORM_DATA: {
      name: '',
      email: '',
      password: ''
    },
    CLICKED_DATA: {
      name: false,
      email: false,
      password: false
    },
    ERRORS_DATA: {
      name: {
        empty: false,
        minLength: false,
        maxLength: false
      },
      email: {
        isEmail: false
      },
      password: {
        empty: false,
        minLength: false
      }
    }
  },

  LOGIN: {
    FORM_DATA: {
      email: '',
      password: ''
    },
    CLICKED_DATA: {
      email: false,
      password: false
    },
    ERRORS_DATA: {
      email: {
        isEmail: false
      },
      password: {
        empty: false,
        minLength: false
      }
    }
  }
};

export const RESOLUTION_TYPES = {
  mobile: 480,
  tablet: 800
};


export const DEVICE_TYPES = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop'
};

