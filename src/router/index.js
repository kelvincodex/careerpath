import {createRouter, createWebHistory, useRouter} from 'vue-router'
import {AuthRouter} from "./auth-router";
import {PageRouter} from "./page-router";
import {ActionUtil} from "../util/baseUtils/ActionUtil";
import {useAuth} from "../stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      ...AuthRouter.route,
      ...PageRouter.route,
  ]
})

router.beforeEach(async (to, from)=>{
    const authStore = useAuth()
    if (to.meta.authenticated && !authStore.isLogin){
        return {
            path: ActionUtil.route.auth.login
        }
    }
})

export default router
