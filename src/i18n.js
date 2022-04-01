import i18n  from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: {
                'Sign Up': 'Sign Up',
                'Password mismatch': 'Password mismatch',
                'Username': 'Username',
                'Display Name': 'Display Name',
                'Password': 'Password',
                'Password Repeat': 'Password Repeat',
                'Login': 'Login'
            }

        },
        tr: {
            translations: {
                'Sign Up': 'Kayit ol',
                'Password mismatch': 'Ayni sifreyi giriniz',
                'Username': 'Kullanici adi',
                'Display Name': 'Tercih Edilen Isim',
                'Password': 'Sifre',
                'Password Repeat': 'Sifreyi Tekrarla',
                'Login': 'Sisteme Gir'
            }
        }
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait: true
    }
})

export default i18n