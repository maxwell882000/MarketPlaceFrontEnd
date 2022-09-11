import {useI18n} from "vue-i18n";

export default function (data, error, key, label) {
    const t = useI18n().t;
    if (!data[key]) {
        error[key] = `${label} ${t("обязательное поле")}`;
    } else {
        delete error[key];
    }
}