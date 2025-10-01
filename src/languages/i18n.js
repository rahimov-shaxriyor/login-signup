import i18n from "i18next"
import { setI18n } from "react-i18next"

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website !",
      logout: "Log out",
      login: "Login",
      signup: "Sign up",
      please: "Please enter your email and password",
      please2: "Please enter your info",
      noaccount: "Don't have an account?",
      haveaccount: "Already have an account?",
      passwordError: "Passwords are not the same"
    }
  },
  uz: {
    translation: {
      welcome: "Saytimizga xush kelibsiz !",
      logout: "Chiqish",
      login: "Kirish",
      signup: "Ro'yxatdan o'tish",
      please: "Iltimos email va parolingizni kiriting",
      please2: "Iltimos ma'lumotlarni kiriting",
      noaccount: "Akkaunt mavjud emasmi?",
      haveaccount: "Akkaunt mavjudmi?",
      passwordError: "Parollar bir xil emas"
    }
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать на наш сайт !",
      logout: "Выйти",
      login: "Войти",
      signup: "Зарегистрировать",
      please: "Пожалуйста введите ваш эмейл и пароль",
      please2: "Пожалуйста введите вашу информацию",
      noaccount: "Нет аккаунта?",
      haveaccount: "Уже есть аккаунт?",
      passwordError: "Пароли не одинаковые"
    }
  }
}

i18n.init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  interpolation: { escapeValue: false }
})

setI18n(i18n)

export default i18n
