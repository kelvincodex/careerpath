import {RegisterRequest} from "../model/request/RegisterRequest";
import {sweetToast} from "../util/mixin/sweet";
import {LoginRequest} from "../model/request/LoginRequest";

export class ErrorsService{
    static register(registerRequest = RegisterRequest, errors){

            if (!registerRequest.request.first_name){
                errors.firstname = true;
                return 0;
            }
            if (!registerRequest.request.email){
                    errors.email = true
                return 0;
            }
            if (!registerRequest.request.password){
                errors.password = true
                return 0;
            }
            if (!registerRequest.request.last_name){
                errors.lastname = true
                return 0;
            }
        return 1;
    }

    static login(loginRequest = LoginRequest, errors){
        if (!loginRequest.request.email){
            errors.email = true
            return 0;
        }
        if (!loginRequest.request.password){
            errors.password = true
            return 0;
        }
        return 1;
    }
}