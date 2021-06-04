import { requestCustomAxios } from "./requestCutomAxios"
import { ACCOUNTS, USERS } from "../url/index";

class User {
    async login(email : string, password : string) {
        try {
            const body = { email, password }
            const url = ACCOUNTS.login()
            const response = await requestCustomAxios({method : 'POST', url : url, body : body })
            return response;
        } catch (error) {
            throw error
        }
    }
export default new User()