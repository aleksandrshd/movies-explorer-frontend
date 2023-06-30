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
  mobile: 631,
  tablet: 900
};


export const DEVICE_TYPES = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop'
};

export const INIT_ADD_CARDS = {
  mobile: {
    init: 5,
    add: 2
  },
  tablet: {
    init: 8,
    add: 2
  },
  desktop: {
    init: 12,
    add: 4
  }
};

export const SEARCHFORM_CHECKBOX_WIDTH = 640;

export const SHORT_FILM_DURATION = 40;

