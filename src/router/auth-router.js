import LoginView from '../views/authViews/LoginView.vue'
import RegisterView from '../views/authViews/RegisterView.vue'
import {ActionUtil} from "../util/baseUtils/ActionUtil";
export  class AuthRouter{
    static route =[
         {
             path:'/login',
             name: ActionUtil.route.auth.login,
             component: LoginView,
             // meta: {authenticated: false}
         },
        {
             path:'/register',
             name: ActionUtil.route.auth.register,
             component: RegisterView,
            // meta: {authenticated: false}
         },
    ]
}