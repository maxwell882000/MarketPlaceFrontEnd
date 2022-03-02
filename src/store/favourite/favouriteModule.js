import favouriteService from "@/services/actions/favouriteService";

export const favouriteModule = {
    state() {
        return {}
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async addRemoveFavourite({commit}, id) {
            await favouriteService.favourite(id);
        }
    }
}
