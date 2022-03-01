import mainService from "@/services/main/mainService";

export const mainModule = {
    namespaced: true,
    state() {
        return {
            banners: [
                //elements
                // id:int, link:string , image:string
            ],
            discount: {
                filter: "",
                items: [
                    // elements
                    // filter
                    // id
                    // mob_image
                    // des_image
                ],
            },
            product_of_day: {
                hours: 0,
                minutes: 0,
                items: [
                    // elements
                    // image
                    // title
                    // price
                    // favourite
                    // basket
                    // discount
                    // real_price
                    // mark
                    // num_comment
                    // credit : {
                    //  month
                    //  price
                    //  name
                    // }
                ],
            }
        }
    },
    getters: {
        banners(state) {
            return state.banners;
        },
        discount(state) {
            return state.discount;
        },
        product_of_day(state) {
            return state.product_of_day;
        }
    },
    actions: {
        async getMain({commit}) {
            let result = await mainService.main();
            commit('setMain', result);
        }
    },
    mutations: {
        setMain(state, result) {
            state.banners = result.banners;
            state.product_of_day = result.product_of_day;
            state.discount = result.discount;
        }
    },


}