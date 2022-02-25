import {createStore} from "vuex";
import {authModule} from "@/store/auth/authModule";
import {authWindow} from "@/store/auth/authWindow";
import {langModule} from "@/store/general/langModule";

export default createStore({
    modules: {
        auth: authModule,
        authWindow: authWindow,
        langModule: langModule
    }
});
