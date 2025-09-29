import i18n from "i18next"
import { setI18n } from "react-i18next"

const resources = {
    en: { translation: { welcome: "Welcome to our website !", logout: "Log out", login: "Login" } },
    uz: { translation: { welcome: "Saytimizga xush kelibsiz !", logout: "Chiqish", login: "Kirish" } },
    ru: { translation: { welcome: "Добро пожаловать на наш сайт !", logout: "Выйти", login: "Войти" } }
}

i18n.init({
  resources,
  lng: "en",
  interpolation: { escapeValue: false }
})

setI18n(i18n)

export default i18n
