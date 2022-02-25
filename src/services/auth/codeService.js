import methods from "@/services/api/methods";

class CodeService {
    async sendCode() {
        await methods.get("sendCode/");
    }

    async verifyCode({code}) {
        let form = new FormData();
        form.append("code", code);
        return await methods.post("verifyCode/", form);
    }

    async phoneCodeVerify({code}) {
        let form = new FormData();
        form.append("code", code);
        return await methods.post('phoneCodeVerify/', form);
    }

}

export default new CodeService();