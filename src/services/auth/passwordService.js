import methods from "@/services/api/methods";

class PasswordService {
    async issueTokenForPassword({phone}) {
        let form = new FormData();
        form.append("phone", phone);
        let result = await methods.post("issueTokenForPassword/", form);
        return result.data.result;
    }

    async forgetPassword(password) {
        return await methods.post("forgetPassword/", password);
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