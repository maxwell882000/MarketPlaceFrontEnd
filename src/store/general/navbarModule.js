// import {disableScrollBar, enableScrollBar} from "@/utils/bodyScrollBar";

export const navbarModule = {
    state() {
        return {
            categoriesOpened: false,
        }
    },
    getters: {
        categoriesOpened(state) {
            return state.categoriesOpened;
        }
    },
    mutations: {
        closeCategoryOpened(state) {
            state.categoriesOpened = false;
        },
        toggleCategoryOpened(state) {
            state.categoriesOpened = !state.categoriesOpened;
            // window.scroll(0, 0);
            // if (state.categoriesOpened) {
            //     disableScrollBar();
            // } else {
            //     enableScrollBar();
            // }
        }
    }
}