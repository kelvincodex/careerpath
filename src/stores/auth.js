import {defineStore} from "pinia";
import {RegisterRequest} from "../model/request/RegisterRequest";
import {LoginRequest} from "../model/request/LoginRequest";
import {LoginService} from "../service/LoginService";
import {RegisterService} from "../service/RegisterService";
import {LoginResponse} from "../model/response/LoginResponse";
import {sweetModal, sweetToast} from "../util/mixin/sweet";
import {RegisterResponse} from "../model/response/RegisterResponse";
import {ActionUtil} from "../util/baseUtils/ActionUtil";
import router from "../router";
import {NetworkErrorMessage} from "../util/messages/NetworkErrorMessage";


export const useAuth = defineStore('auth',{
    state: () =>({
        token: LoginResponse.response.auth_token,
        isLogin: false,
        isAuthorize: false,
        isLoading: false,
        user: {}
    }),
    getters: {
        getToken: (state)=>state.token,
        getIsLogin: (state)=>state.isLogin
    },
    actions: {
        logout(){
            localStorage.clear();
            // router.push({name: ActionUtil.route.page.home})
            location.assign('/')
        },
        async login(payload = LoginRequest.request){
            this.isLoading = true
            console.log(LoginRequest.request)
            try{
               const response = await LoginService.login(payload)

                    this.isLoading = false
                    this.isLogin = true
                    this.isAuthorize = true
                    this.token = response.data.auth_token

                    await sweetModal.fire({
                        icon: "success",
                        title: "Successful",
                        text: "You are logged in successfully!!!"
                    })
                const user = await LoginService.user()
                 this.user = user.data.response_msg
                // console.log(this.user)
                await router.push({name: ActionUtil.route.page.home})

            }catch(errors){
                this.isLoading = false
                    console.log(errors.response)
                        await sweetToast.fire({
                            icon: 'error',
                            title: `${errors.response.statusText}`,
                            html: `${Object.values(errors.response.data)}`,
                        })

                         NetworkErrorMessage(errors.message)
                    }},
       async register(payload = RegisterRequest.request){
                this.isLoading = true
            try{
                const response =await  RegisterService.register(payload)
                this.isLoading = false
                console.log(response+ "response")
                if (response.status === 203) {
                    await sweetModal.fire({
                        icon: "error",
                        title: "Something Went Wrong!!",
                        text: `${response.data.response_msg}`
                    })

                    return 0
                }
                else {
                    this.isLoading = false
                    await sweetModal.fire({
                        icon: "success",
                        title: "successful",
                        text: `${response.data.first_name} ${response.data.last_name} You Have Register Successfully proceed to Login`
                    })

                    await router.push({name: ActionUtil.route.auth.login})
                }

            }catch (errors) {
                this.isLoading = false
                NetworkErrorMessage(errors.message)
            }


        }
    },
})