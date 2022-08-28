import {useAuth} from "../stores/auth";
import {AxiosService} from "./interceptors/AxiosService";


export class RegisterService{
    static register (payload){
        return   AxiosService.client().post("/auth/create_user/", payload)

    }
}