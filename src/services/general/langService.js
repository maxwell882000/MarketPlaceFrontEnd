import cookies from "vue-cookies";
import i18n from '@/i18n'

class LangService {
    getLang() {
        let lang = cookies.get('lang');
        if (lang) {
            return lang;
        }
        console.error('[LangService]: No lang found!');
        lang = "ru";
        return lang;
    }

    setLang(lang) {
        cookies.set('lang', lang);
        console.log(lang);
        i18n.global.locale = lang;
    }
}

export default new LangService();