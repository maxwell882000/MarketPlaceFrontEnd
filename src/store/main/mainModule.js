import mainService from "@/services/main/mainService";

function addZero(time) {
    if (time < 10) {
        return "0" + time;
    }
    return time;
}

export const mainModule = {
    namespaced: true,
    state() {
        return {
            showFooterAndHeader: true,
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
                hours: 23,
                minutes: 59,
                seconds: 59,
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
        first_product(state) {
            if (state.product_of_day.items.length !== 0)
                return state.product_of_day.items[0]
            return {}
        },
        showFooterAndHeader: (state) => state.showFooterAndHeader,
        product_of_day(state) {
            return state.product_of_day;
        },
        getTime(state) {
            return addZero(state.product_of_day.hours) +
                ":" + addZero(state.product_of_day.minutes) +
                ":" + addZero(state.product_of_day.seconds);
        },
    },
    actions: {
        async getMain({commit}) {
            commit("wait/START", "main", {root: true});
            let result = await mainService.main();
            commit('setMain', result);
            commit("wait/END", "main", {root: true});
        },
        countDownSecond({commit, state}) {
            commit('decreaseSecond');
            if (state["product_of_day"].seconds < 0) {
                commit('decreaseMinutes');
                if (state["product_of_day"].minutes < 0) {
                    commit('decreaseHours');
                    if (state["product_of_day"].hours < 0) {
                        commit('initialStateHours');
                    }
                    commit('initialStateMinutes');
                }
                commit("initialStateSecond");
            }
        },
    },
    mutations: {
        decreaseSecond(state) {
            state.product_of_day.seconds--;
        },
        initialStateSecond(state) {
            state.product_of_day.seconds = 59;
        },
        decreaseMinutes(state) {
            state.product_of_day.minutes--;
        },
        initialStateMinutes(state) {
            state.product_of_day.minutes = 59;
        },
        decreaseHours(state) {
            state.product_of_day.hours--;
        },
        initialStateHours(state) {
            state.product_of_day.hours = 23;
        },
        toggleFooterAndHeader(state) {
            state.showFooterAndHeader = !state.showFooterAndHeader;
        },
        openFooterAndHeader(state) {
           state.showFooterAndHeader = true;
        },
        hideFooterAndHeader(state) {
            state.showFooterAndHeader = false;
        },
        setMain(state, result) {
            state.banners = result.banners;
            state.product_of_day = result.product_of_day;
            state.product_of_day.seconds = 10;
            state.discount = result.discount;
            console.log(result.discount);
        }
    },


}