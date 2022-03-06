import {createStore} from "vuex";
import {authModule} from "@/store/auth/authModule";
import {authWindow} from "@/store/auth/authWindow";
import {langModule} from "@/store/general/langModule";
import {passwordModule} from "@/store/auth/passwordModule";
import {commonModule} from "@/store/common/commonModule";
import {mainModule} from "@/store/main/mainModule";
import {favouriteModule} from "@/store/favourite/favouriteModule";
import {backetModule} from "@/store/backet/backetModule";
import {productModule} from "@/store/product/productModule";
import {navbarModule} from "@/store/general/navbarModule";

export default createStore({
    modules: {
        passwordModule: passwordModule,
        auth: authModule,
        authWindow: authWindow,
        langModule: langModule,
        commonModule: commonModule,
        mainModule: mainModule,
        favouriteModule: favouriteModule,
        backetModule: backetModule,
        navbarModule: navbarModule,
        productModule: productModule,

    }
});
