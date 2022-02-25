import methods from "@/services/api/methods";

class PasswordService {
    async issueTokenForPassword({phone}) {
        let form = new FormData();
        form.append("phone", phone);
        return await methods.post("issueTokenForPassword/", form);
    }

    async forgetPassword({password, password_repeat}) {
        let form = new FormData();
        form.append("password", password);
        form.append("password_repeat", password_repeat);
        return await methods.post("forgetPassword/", form);
    }

    async changePassword({password, password_new, password_rep}) {
        let form = new FormData();
        form.append("password", password);
        form.append("password_new", password_new);
        form.append("password_rep", password_rep);
        return await methods.post("changePassword/", form);
    }
}

export default new PasswordService();