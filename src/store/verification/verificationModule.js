import fileService from "@/services/file/fileService";
import validation from "@/mixins/validation";
import verificationConstant from "@/constants/verification/verificationConstant";
import userDataService from "@/services/verification/userDataService";

export const verificationModule = {
    namespaced: true,
    state() {
        const state = {
            success: false,
            userData: {
                // "avatar->name" => "asd"
                // "phone" => "asfasf"
                // "userCreditData->additional_phone" => "asfsaf"
                // "password" => "safa"
                // "userCreditData->crucialData->firstname" => "qwr"
                // "userCreditData->crucialData->lastname" => "123123"
                // "userCreditData->crucialData->father_name" => "123123"
                // "userCreditData->sex" => "1"
                // "userCreditData->crucialData->series" => "12123"
                // "userCreditData->crucialData->date_of_birth" => "2022-04-06"
                // "userCreditData->crucialData->pnfl" => "213123"
                // "file->id_file->userCreditData->crucialData->passport" => "173"
                // "file->class_name->userCreditData->crucialData->passport" => "App\Domain\File\Entities\FileTemp"
                // "file->id_file->userCreditData->crucialData->passport_reverse" => "174"
                // "file->class_name->userCreditData->crucialData->passport_reverse" => "App\Domain\File\Entities\FileTemp"
                // "file->id_file->userCreditData->crucialData->user_passport" => "175"
                // "file->class_name->userCreditData->crucialData->user_passport" => "App\Domain\File\Entities\FileTemp"
            },
            errorData: {}
        }
        state[verificationConstant.PASSPORT] = {};
        state[verificationConstant.PASSPORT_REVERSE] = {};
        state[verificationConstant.USER_PASSPORT] = {};
        return state;
    },
    actions: {
        async fileUpload({commit}, {prefix, file, img}) {
            commit("wait/START", "file_loaded", {root: true});
            try {

                let result = await fileService.singleFile({prefix: prefix, file: file});
                commit(prefix, {id_server: result, img: img});
            } catch (e) {
                console.log(e);
            }
            commit("wait/END", "file_loaded", {root: true});
        },
        async submitData({commit, getters}) {
            commit("wait/START", "complete_validation", {root: true});
            try {
                const request = {
                    ...getters.userData,
                    ...getters[verificationConstant.PASSPORT],
                    ...getters[verificationConstant.USER_PASSPORT],
                    ...getters[verificationConstant.PASSPORT_REVERSE]
                };
                console.log(request);
                await userDataService.createUserData(request); // get some unnecessary result
                // if there is no error, so go to the next
                commit("setUserData", null, {root: true});
                commit('setSuccess');
            } catch (e) {
                console.log(e);
            }
            commit("wait/END", "complete_validation", {root: true});
        },
        validation({getters}) {
            const type = verificationConstant;
            validation(getters.userData, getters.errorData, type.FIRST_NAME, "Имя");
            validation(getters.userData, getters.errorData, type.LAST_NAME, "Фамилия");
            validation(getters.userData, getters.errorData, type.ADDITIONAL_PHONE, "Доп. номер телефона");
            validation(getters.userData, getters.errorData, type.SERIES, "Серия пасспорта");
            validation(getters.userData, getters.errorData, type.DATE_OF_BIRTH, "Дата рождения");
            validation(getters.userData, getters.errorData, type.SEX, "Пол");
        }
    },
    getters: {
        [verificationConstant.USER_PASSPORT](state) {
            return state[verificationConstant.USER_PASSPORT];
        },
        [verificationConstant.PASSPORT_REVERSE](state) {
            return state[verificationConstant.PASSPORT_REVERSE];
        },
        [verificationConstant.PASSPORT](state) {
            return state[verificationConstant.PASSPORT];
        },
        userData(state) {
            return state.userData;
        },
        success(state) {
            return state.success;
        },
        errorData(state) {
            return state.errorData;
        }
    },
    mutations: {
        setSuccess(state) {
            state.success = true;
        },
        [verificationConstant.USER_PASSPORT](state, {id_server, img}) {
            state[verificationConstant.USER_PASSPORT] = id_server;
            state[verificationConstant.USER_PASSPORT].image = img
        },
        [verificationConstant.PASSPORT_REVERSE](state, {id_server, img}) {
            state[verificationConstant.PASSPORT_REVERSE] = id_server;
            state[verificationConstant.PASSPORT_REVERSE].image = img

        },
        [verificationConstant.PASSPORT](state, {id_server, img}) {
            state[verificationConstant.PASSPORT] = id_server;
            state[verificationConstant.PASSPORT].image = img
        },
        setUserData(state, user) {
            state.userData = user;
        }
    }
}