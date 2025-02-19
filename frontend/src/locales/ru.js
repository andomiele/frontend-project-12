export default {
  translation: {
    header: {
      title: 'Hexlet Chat',
      button: 'Выйти',
    },
    errors: {
      401: 'Неверные имя пользователя или пароль',
      409: 'Такой пользователь уже существует',
      required: 'Обязательное поле',
      min: 'Минимум 3 буквы',
      symbolRange: 'От 3 до 20 символов',
      sixSymbols: 'Не менее 6 символов',
      max: 'Максимум 20 букв',
      confirm: 'Пароли должны совпадать',
      unic: 'Должно быть уникальным',
    },
    authForm: {
      yourNickname: 'Ваш ник',
      password: 'Пароль',
      login: 'Войти',
      dontHaveAccount: 'Нет аккаунта?',
      registrationLink: 'Регистрация',
    },
    signupForm: {
      registration: 'Регистрация',
      userName: 'Имя пользователя',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      signup: 'Зарегистрироваться',
    },
    modal: {
      menu: 'меню',
      channelName: 'Имя канала',
      addChannel: 'Добавить канал',
      editChannel: 'Переименовать канал',
      deleteChannel: 'Удалить канал',
      sentBtn: 'Отправить',
      canselBtn: 'Отменить',
      deleteBtn: 'Удалить',
      confirmation: 'Уверены?',
    },
    mainPage: {
      channels: 'Каналы',
      plus: '+',
    },
    notFoundPage: {
      notFound: 'Страница не найдена',
      canGoTo: 'Но вы можете перейти',
      generalPage: 'на главную страницу',
    },
    channelMenu: {
      control: 'Управление каналом',
      delete: 'Удалить',
      rename: 'Переименовать',
    },
    chat: {
      counter: {
        count_one: '{{count}} сообщение',
        count_few: '{{count}} сообщения',
        count_many: '{{count}} сообщений',
      },
      sent: 'Отправить',
    },
    toasts: {
      сhannelAdded: 'Канал создан',
      сhannelEdited: 'Канал переименован',
      channelDeteted: 'Канал удалён',
      FETCH_ERROR: 'Ошибка соединения',
      // 400: 'Некорректный запрос',
      // 401: 'Неверные имя пользователя или пароль',
      // 403: 'Недостаточно прав',
      // 409: 'Такой пользователь уже существует',
      500: 'Ошибка соединения с сервером',
      // 501: 'Отправьте запрос позднее',
      // 503: 'Сервер временно недоступен',
    },
  },
};
