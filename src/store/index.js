import {createStore} from "vuex";
import {authModule} from "@/store/auth/authModule";
import {authWindow} from "@/store/auth/authWindow";
import {langModule} from "@/store/general/langModule";
import {passwordModule} from "@/store/auth/passwordModule";

export default createStore({
    modules: {
        passwordModule: passwordModule,
        auth: authModule,
        authWindow: authWindow,
        langModule: langModule,

    }
});
