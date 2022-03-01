import favouriteService from "@/services/actions/favouriteService";

export const favouriteModule = {
    state() {
        return {}
    },
    actions: {
       async addRemoveFavourite(id) {
            await favouriteService.favourite(id);
        }
    }
}
