import {useStore} from "vuex";

export default function ({key, item}, store = null) {
    store = store || useStore();
    const addFilter = (val) => store.commit('productFilterByModule/addFilterBy', val);
    return () => addFilter({key: key, item: item});
}