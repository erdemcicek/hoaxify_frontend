import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: {
        "Sign Up": "Sign Up",
        "Password mismatch": "Password mismatch",
        Username: "Username",
        "Display Name": "Display Name",
        Password: "Password",
        "Password Repeat": "Password Repeat",
        Login: "Login",
        Logout: "Logout",
        Users: "Users",
        Next: "next >",
        Previous: "< previous",
        "Load Failure": "Load Failure",
        "User not found": "User not found",
        Edit: "Edit",
      },
    },
    tr: {
      translations: {
        "Sign Up": "Kayit ol",
        "Password mismatch": "Ayni sifreyi giriniz",
        Username: "Kullanici adi",
        "Display Name": "Tercih Edilen Isim",
        Password: "Sifre",
        "Password Repeat": "Sifreyi Tekrarla",
        Login: "Sisteme Gir",
        Logout: "Cik",
        Users: "Kullanicilar",
        Next: "sonraki >",
        Previous: "< onceki",
        "Load Failure": "Liste alinamadi",
        "User not found": "Kullanici bulunamadi",
        Edit: "Duzenle",
      },
    },
  },
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    wait: true,
  },
});

export default i18n;
