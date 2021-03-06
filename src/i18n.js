import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { register } from "timeago.js";

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
        "Change Display Name": "Change Display Name",
        Save: "Save",
        Cancel: "Cancel",
        "My Profile": "My Profile",
        "There are no hoaxes": "There are no hoaxes",
        "Load old hoaxes": "Load old hoaxes",
        "There are new hoaxes": "There are new hoaxes",
        "Delete Hoax": "Delete Hoax",
        "Are you sure to delete hoax?": "Are you sure to delete hoax?",
        "Delete My Account": "Delete My Account",
        "Are you sure to delete your account?":
          "Are you sure to delete your account?",
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
        "Change Display Name": "Gorunur Isminizi Degistirin",
        Save: "Kaydet",
        Cancel: "Iptal Et",
        "My Profile": "Hesabim",
        "There are no hoaxes": "Hoax bulunamadi",
        "Load old hoaxes": "Gecmis hoaxlari getir",
        "There are new hoaxes": "Yeni Hoaxlar var",
        "Delete Hoax": "Hoax'u sil",
        "Are you sure to delete hoax?":
          "Hoax'u silmek istediginizden emin misiniz?",
        "Delete My Account": "Hesabimi Sil",
        "Are you sure to delete your account?":
          "Hesabinizi silmek istediginizden emin misiniz?",
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

const timeagoTR = (number, index) => {
  return [
    ["az ??nce", "??imdi"],
    ["%s saniye ??nce", "%s saniye i??inde"],
    ["1 dakika ??nce", "1 dakika i??inde"],
    ["%s dakika ??nce", "%s dakika i??inde"],
    ["1 saat ??nce", "1 saat i??inde"],
    ["%s saat ??nce", "%s saat i??inde"],
    ["1 g??n ??nce", "1 g??n i??inde"],
    ["%s g??n ??nce", "%s g??n i??inde"],
    ["1 hafta ??nce", "1 hafta i??inde"],
    ["%s hafta ??nce", "%s hafta i??inde"],
    ["1 ay ??nce", "1 ay i??inde"],
    ["%s ay ??nce", "%s ay i??inde"],
    ["1 y??l ??nce", "1 y??l i??inde"],
    ["%s y??l ??nce", "%s y??l i??inde"],
  ][index];
};

register("tr", timeagoTR);

export default i18n;
