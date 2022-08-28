import {AxiosService} from "./interceptors/AxiosService";

export class LoginService{
    static login (payload) {
            return AxiosService.client().post("/auth/token/login/", payload)
    }
}