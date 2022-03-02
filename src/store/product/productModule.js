// import productService from "@/services/product/productService";

import productService from "@/services/product/productService";

export const productModule = {
    namespaced: true,
    state() {
        return {
            currentImage: "",
            imageList: [],
            credit: {
                "id": 0,
                "percent": 0,
                "month": 0,
                "main_credit_id": 0
            },
            product: {
                "id": 0,
                "installment": {
                    "name": "",
                    "credits": [
                        // {
                        //     "id": 1,
                        //     "percent": 12,
                        //     "month": 2,
                        //     "main_credit_id": 1
                        // }
                    ]
                },
                "images": [
                    // {
                    //     "image": "http://127.0.0.1:8000/storage/product/image/Vector9.png"
                    // }
                ],
                "category": [
                    // {
                    //     "name": "ГЛАВНЫЙ",
                    //     "slug": "asdsad"
                    // },
                ],
                "colors": [
                    // {
                    //     "image": "http://127.0.0.1:8000/storage/product/main/color/Vector11.png",
                    //     "color_name": "черный",
                    //     "images": [
                    //         "http://127.0.0.1:8000/storage/product/many/color/banner111.png"
                    //     ]
                    // }
                ],
                "shop": {
                    "name": "",
                    "slug": "",
                    "image": "",
                },
                "key_with_values": [
                    // {
                    //     "text": "Название хедера",
                    //     "values": [
                    //         "23",
                    //         "32",
                    //         "21"
                    //     ]
                    // }
                ],
                "about_product": {
                    "id": 0,
                    "header": "",
                    "body": ""
                },
                "characteristics": [
                    // {
                    //     "header": "Большие Характеристики",
                    //     "values": [
                    //         {
                    //             "key": "Число Пи",
                    //             "value": "12"
                    //         },
                    //         {
                    //             "key": "Число ЗЕТ",
                    //             "value": "32"
                    //         }
                    //     ]
                    // }
                ],
                "image": "",
                "title": "",
                "favourite": false,
                "basket": false,
                "price": 0,
                "discount": 0,
                "real_price": "",
                "mark": 0,
                "num_comment": 0,
                "credit": {
                    "month": 0,
                    "price": "",
                    "name": ""
                }
            }
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async loadProduct({commit}, id) {
            commit('wait/START', 'product', {root: true});
            let product = await productService.getProduct(id);
            commit("setProduct", product);
            commit('setImageList', product.images);
            if (product.installment && product.installment.credits.length !== 0)
                commit('setCredit', product.installment.credits[0])
            commit("wait/END", 'product', {root: true});
        }
    },
    mutations: {
        setProduct(state, product) {
            state.product = product;
            console.log(product);
        },
        setCurrentImage(state, image) {
            state.currentImage = image;
        },
        setImageList(state, imageList) {
            state.imageList = imageList;
            if (imageList.length !== 0)
                state.currentImage = imageList[0]
        },
        setCredit(state, credit) {
            state.credit = credit;
        }
    },
    getters: {
        credit(state) {
            return state.credit;
        },
        shop(state) {
            return state.product.shop
        },
        selectComponent(state) {
            return state.product.key_with_values;
        },
        colors(state) {
            console.log(state.product.colors)
            return state.product.colors;
        },
        currentImage(state) {
            return state.currentImage;
        },
        imageList(state) {
            return state.imageList;
        },
        reviews(state) {
            return state.product.num_comment;
        },
        name(state) {
            return state.product.title;
        },
        rating(state) {
            return state.product.mark;
        },
        favourite(state) {
            return {
                favourite: state.product.favourite,
                id: state.product.id
            }
        },
        path(state) {
            let response = [
                {
                    name: "Главная",
                    path: "/"
                }
            ];
            let category = state.product.category;
            if (category.length !== 0) {
                category.slice(0, -1).forEach(function (elem) {
                    response.push({
                        name: elem.name,
                        path: "/category/" + elem.slug
                    })
                });
                let last = category.slice(-1)[0]
                response.push({
                    name: last.name + " " + state.product.title,
                    path: "/item/" + state.product.id
                })
            }
            return response
        },
        product(state) {
            return state.product;
        }
    }
}