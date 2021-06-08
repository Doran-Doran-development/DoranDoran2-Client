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
    async teacherSignup(name : string, email: string, password: string, grade?: number, homeroom?: number, certification_code?: string) {
        try {
            const body = {
                email : email,
                password : password,
                name : name,
                grade : grade,
                homeroom : homeroom,
                certification_code: certification_code,
            }
            const url = USERS.userTeacher()
            const response = await requestCustomAxios({
                method: 'POST',
                url: url,
                body : body
            })
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default new User()