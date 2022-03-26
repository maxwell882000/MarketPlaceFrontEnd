import productService from "@/services/product/productService";

export const productFilterByModule = {
    namespaced: true,
    state() {
        return {
            filterBy: {},
            currentPage: 1,
            products: {
                // "current_page": 1,
                // "data": [
                //     {
                //         "id": 1,
                //         "image": "http://127.0.0.1:8000/storage/card/image/car.svg",
                //         "title": "first product",
                //         "favourite": false,
                //         "basket": false,
                //         "price": " 0",
                //         "discount": 3,
                //         "real_price": " 0",
                //         "mark": "2.0",
                //         "num_comment": 3,
                //         "credit": []
                //     },
                //     {
                //         "id": 2,
                //         "image": "http://127.0.0.1:8000/storage/card/image/funel.svg",
                //         "title": "asdfdf",
                //         "favourite": false,
                //         "basket": false,
                //         "price": " 123",
                //         "discount": 1,
                //         "real_price": " 121",
                //         "mark": "0.0",
                //         "num_comment": 0,
                //         "credit": []
                //     },
                //     {
                //         "id": 3,
                //         "image": "http://127.0.0.1:8000/storage/card/image/facebook3.svg",
                //         "title": "Fifth categoryFifth category",
                //         "favourite": false,
                //         "basket": false,
                //         "price": " 42",
                //         "discount": 12,
                //         "real_price": " 36",
                //         "mark": "0.0",
                //         "num_comment": 0,
                //         "credit": []
                //     },
                //     {
                //         "id": 4,
                //         "image": "http://127.0.0.1:8000/storage/card/image/carfront3.svg",
                //         "title": "as dasd asd asds",
                //         "favourite": false,
                //         "basket": false,
                //         "price": " 21",
                //         "discount": 12,
                //         "real_price": " 18",
                //         "mark": "0.0",
                //         "num_comment": 0,
                //         "credit": []
                //     }
                // ],
                // "first_page_url": "http://127.0.0.1:8000/api/filter/product?page=1",
                // "from": 1,
                // "last_page": 1,
                // "last_page_url": "http://127.0.0.1:8000/api/filter/product?page=1",
                // "links": [
                //     {
                //         "url": null,
                //         "label": "&laquo; Previous",
                //         "active": false
                //     },
                //     {
                //         "url": "http://127.0.0.1:8000/api/filter/product?page=1",
                //         "label": "1",
                //         "active": true
                //     },
                //     {
                //         "url": null,
                //         "label": "Next &raquo;",
                //         "active": false
                //     }
                // ],
                // "next_page_url": null,
                // "path": "http://127.0.0.1:8000/api/filter/product",
                // "per_page": 15,
                // "prev_page_url": null,
                // "to": 4,
                // "total": 4
            }
        }
    },
    getters: {
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
        }
    },
    actions: {
        async getProducts({commit, getters}, val) {
            commit("wait/START", "product_wrapper_load", {root: true});
            commit('addFilterBy', {key: 'page', item: val});
            try {
                let result = await productService.getProducts(constructKeys(getters.filterBy));
                commit('setProducts', result);
            } catch (e) {
                console.log(e);
            }
            commit("wait/END", 'product_wrapper_load', {root: true})
        }
    },
    mutations: {
        clean(state) {
            state.products = {}
            state.filterBy = {}
        },
        setProducts(state, products) {
            state.products = products;
        },
        addFilterBy(state, {key, item}) {
            state.filterBy[key] = item;
        }
    }
}

function constructKeys(filter) {
    return Object.entries(filter).filter(item => item[0] && item[1]).map(item => `${item[0]}=${item[1]}`).join("&")
}