import {useI18n} from "vue-i18n";

const t = useI18n().t;
export default [
    {
        key: 1,
        label: t('Мужской')
    },
    {
        key: 2,
        label: t('Женский')
    }
]