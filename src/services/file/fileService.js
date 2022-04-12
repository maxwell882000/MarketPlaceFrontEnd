import methods from "@/services/api/methods";

class FileService {
    async manyFiles(files) {
        let result = await methods.post("file/many/", files);
        return result.data.result;
    }

    async singleFile(file) {
        console.log(file);
        let result = await methods.post("file/", file);
        console.log(result);
        return result.data.result;
    }
}

export default new FileService();