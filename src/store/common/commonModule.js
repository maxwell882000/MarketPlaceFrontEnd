import commonService from "@/services/general/commonService";

export const commonModule = {
    state() {
        return {
            drop_bar: [
                // elements
                //  name :string, slug : string, children: [],
            ],
            nav_bar: [
                // elements
                //  name :string, slug : string
            ]
        }
    },
    getters: {
        nav_bar(state) {
            return state.nav_bar;
        },
        drop_bar(state) {
            return state.drop_bar;
        }
    },
    actions: {
        async getHeaders({commit}) {
            let result = await commonService.headers();
            commit("setDropBar", result.drop_bar);
            commit("setNavBar", result.nav_bar);
        },

    },
    mutations: {
        setDropBar(state, drop_bar) {
            state.drop_bar = drop_bar;
        },
        setNavBar(state, nav_bar) {
            state.nav_bar = nav_bar;
        }
    }
}