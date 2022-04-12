import methods from "@/services/api/methods";

class UserDataService {
    async createUserData(data) {
        let result = await methods.post("verification/userData", data);
        return result.data.result;
    }
}

export default new UserDataService();