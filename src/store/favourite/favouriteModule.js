import favouriteService from "@/services/actions/favouriteService";
import favouriteGetService from "@/services/favourite/favouriteService";

export const favouriteModule = {
    state() {
        return {}
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async addRemoveFavourite({commit, getters, dispatch}, id) {
            const inFavourite = getters["productFilterByModule/isProducts"];
            if (inFavourite) {
                commit("wait/START", "favourite");
            }
            await favouriteService.favourite(id);
            if (inFavourite) {
                dispatch('getFavourite');
                dispatch('productFilterByModule/getProducts', 1);
            }
        },
        async getFavourite({commit}) {
            commit("wait/START", "favourite")
            try {
                let result = await favouriteGetService.getFavourite();
                commit('productFilterByModule/setFilterCanBeApplied', result);
            } catch (e) {
                console.log(e);
            }
            commit("wait/END", "favourite")

        }
    }
}
