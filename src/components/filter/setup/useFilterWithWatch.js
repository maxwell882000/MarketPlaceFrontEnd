import {watch} from "vue";
import {useStore} from "vuex";

export default function (addToFilters, watchSources) {
    const store = useStore();
    watch(
        watchSources,
        (sources) => {
            const partialClean = () => store.commit("productFilterByModule/partialClean");
            const getProducts = (val) => store.dispatch('productFilterByModule/getProducts', val);
            partialClean();
            addToFilters(sources)
            getProducts(1);
        }
    );
}