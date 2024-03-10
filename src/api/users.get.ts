import axios from "axios";
import createQueryString from "../services/createQueryString.service.ts";

const getUsers = {
    async get(requestDataFromField: string) {

        const query = createQueryString.create(requestDataFromField);
        console.log(query);
        return axios
            .get(query.href)
            .then((resource) => {
                return resource.data;
            }).catch((error: Error) => {
                alert(`Произошла ошибка ${error}`);
            })
    }
}
export default getUsers;
