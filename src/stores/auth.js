import {defineStore} from "pinia";
import {RegisterRequest} from "../model/request/RegisterRequest";
import {LoginRequest} from "../model/request/LoginRequest";
import {LoginService} from "../service/LoginService";
import {RegisterService} from "../service/RegisterService";
import {LoginResponse} from "../model/response/LoginResponse";
import {sweetModal, sweetToast} from "../util/mixin/sweet";
import {RegisterResponse} from "../model/response/RegisterResponse";
import {useRouter} from "vue-router";
import {ActionUtil} from "../util/baseUtils/ActionUtil";


export const useAuth = defineStore('auth',{
    state: () =>({
        token: LoginResponse.response.auth_token,
        isLogin: false,
        isAuthorize: false,
        email: RegisterResponse.response.email,
        password: RegisterResponse.response.password,
        firstname: RegisterResponse.response.first_name,
        lastname: RegisterResponse.response.last_name,
        username: RegisterResponse.response.username,
    }),
    getters: {
        getToken: (state)=>state.token,
        getIsLogin: (state)=>state.isLogin
    },
    actions: {
        logout(){
            localStorage.clear();
            location.assign('/');
        },
        login(payload = LoginRequest.request){
            LoginService.login(payload).then((response)=>{
                this.isLogin = true
                this.token = response.data.auth_token
                this.$router.push({ name: ActionUtil.route.page.home})
                console.log(`hello its the auth ${LoginResponse.response.auth_token}`)
            }).catch((errors)=>{
                console.log(errors)
                if (errors.response){
                    sweetToast.fire({
                        icon: 'error',
                        html: `${Object.keys(errors.response.data)} ${Object.values(errors.response.data)}`,

                    })
                }
            })
        },
        register(payload = RegisterRequest.request){
            const router = useRouter()
            RegisterService.register(payload).then((response)=>{
                RegisterResponse.response.username = response.data.username
                RegisterResponse.response.email = response.data.email
                RegisterResponse.response.first_name = response.data.first_name
                RegisterResponse.response.last_name = response.data.last_name
                router.push({ name: ActionUtil.route.auth.login})
            }).catch((errors)=>{
                console.log(errors.response)
                sweetToast.fire({
                    icon: 'error',
                    html: "Something Went Wrokng"
                })
            })
        }
    },
})