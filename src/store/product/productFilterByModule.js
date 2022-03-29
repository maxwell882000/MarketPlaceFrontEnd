import productService from "@/services/product/productService";

export const productFilterByModule = {
    namespaced: true,
    state() {
        return {
            filterBy: {},
            filterCanBeApplied: {},// will be set individually depending on window || search , category, shop , favourite
            showChosen: {},
            currentPage: 1,
            products: {},
            deletedFilter: {}
        }
    },
    getters: {
        prices(state) {
            return {
                min: state.filterBy['min_price'] || 0,
                max: state.filterBy['max_price'] || 0
            }
        },
        filterDeleted(state) {
            return state.deletedFilter;
        },
        getChosenItems(state) {
            return ({values, prefix_key}) => {
                let val = []; // is the array, from checkbox model
                Object.entries(state.showChosen).forEach(item => {
                    let key = item[0].split(SEPARATOR);
                    if (prefix_key === key[0]) {
                        val = values.filter(e => e.id === parseInt(key[1]));
                    }
                });
                console.log(val);
                return val;
            }
        },
        showChosen(state) {
            return state.showChosen;
        },
        filterBy(state) {
            return state.filterBy;
        },
        productData(state) {
            return state.products.data || [];
        },
        products(state) {
            return state.products
        },
        slug(state) {
            return state.filterBy.category_slug || "";
        },
        brand(state) {
            return state.filterCanBeApplied.brands || [];
        },
        color(state) {
            return state.filterCanBeApplied.colors || [];
        },
        shop(state) {
            return state.filterCanBeApplied.shops || [];
        }
    },
    actions: {
        addCategory({commit, rootGetters, dispatch}, slug) {
            let request_category = [];
            let categories = rootGetters.drop_bar;
            categories.filter(first => first.slug === slug
                || first.children
                    .filter(second => second.slug === slug
                        || second.children.filter(third => third.slug === slug).length !== 0).length !== 0)
                .forEach(first => {
                    if (first.slug === slug) {
                        first.children.forEach(e => e.children.forEach(cat => request_category.push(cat)));
                    } else {
                        first.children.filter(e => e.slug === slug)
                            .forEach(cat => request_category.push(cat));
                    }
                });
            if (request_category.length > 1) {
                commit("removeFilterBy", 'category_slug');
                commit("addFilterBy", {key: "category_slug_in", item: request_category});
            } else {
                commit("removeFilterBy", "category_slug_in");
                commit("addFilterBy", {key: "category_slug", item: slug});
            }
            dispatch("getProducts", 1);
        },
        async getProducts({commit, getters}, val) {
            commit("wait/START", "product_wrapper_load", {root: true});
            if (val)
                commit('addFilterBy', {key: 'page', item: val});
            try {
                let result = await productService.getProducts(constructKeys(getters.filterBy));
                commit('setProducts', result);
            } catch (e) {
                console.log(e);
            }
            commit("wait/END", 'product_wrapper_load', {root: true})
        },
        removeAllChosen({dispatch, getters}) {
            Object.entries(getters.showChosen).map(item => {
                dispatch('removeChosen', item[0]);
                // commit("addDeletedFilter", item[0]);
            });
        },
        cleanSpecificKeys({dispatch}, value) {
            value.old.forEach(e => {
                let key = value.prefix_key + SEPARATOR + e.id;
                dispatch('removeChosen', key);
            });
        },
        removeChosen({commit, getters}, key) {
            let seperated = key.split(SEPARATOR);
            let filterBy = getters.filterBy;
            try {
                let filtered = filterBy[seperated[0]].filter(e => e !== seperated[1]);
                commit("addFilterBy", {key: seperated[0], item: filtered});
            } catch (e) {
                if (seperated[0] in filterBy)
                    throw {
                        message: `filterBy[${seperated[0]}] is not array. 
                Value of filterBy = ${filterBy[seperated[0]]}`
                    };
            }
            commit('removeChosen', key);
        },
        removeAndAddToDeleteFilter({commit}, key) {
            // commit('addDeletedFilter', key);
            commit('removeChosen', key);
        },
        addToChosenFilterAndGetProduct({commit, dispatch}, value) {
            dispatch("cleanSpecificKeys", value);
            commit("addShowChosen", value);
            dispatch('getProducts');
        },

    },
    mutations: {
        clean(state) {
            state.products = {}
            state.filterBy = {}
        },
        addDeletedFilter(state, key) {
            state.deletedFilter[key] = 1;
        },
        cleanDeletedFilter(state, keys) {
            keys.forEach(e => delete state.deletedFilter[e]);
        },
        removeChosen(state, key) {
            delete state.showChosen[key];
        },
        addShowChosen(state, {prefix_key, chosen}) {
            chosen.forEach(e => {
                state.showChosen[prefix_key + SEPARATOR + e.id] = e.name;
            });
            state.filterBy[prefix_key] = chosen;
        },
        setProducts(state, products) {
            state.products = products;
        },
        removeFilterBy(state, key) {
            if (key in state.filterBy) {
                delete state.filterBy[key];
            }
        },
        setFilterCanBeApplied(state, filter) {
            state.filterCanBeApplied = filter;
        },
        addFilterBy(state, {key, item}) {
            state.filterBy[key] = item;
        },
    }
}
const SEPARATOR = '-';

function constructKeys(filter) {
    return Object.entries(filter).filter(item => item[0] && item[1])
        .map(item => {
            if (Array.isArray(item[1])) {
                const s = item[1].map((val, index) => `${item[0]}[${index}]=${val.id}`).join("&");
                console.log(s)
                return s;
            }
            return `${item[0]}=${item[1]}`
        }).join("&")
}