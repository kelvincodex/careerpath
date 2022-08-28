import HomeView from '../views/openViews/HomeView.vue'
import OptionStepsView from '../views/openViews/OptionStepsView.vue'
import AboutView from '../views/openViews/AboutView.vue'
import PageNotFound from '../views/openViews/PageNotFound.vue'
import {ActionUtil} from "../util/baseUtils/ActionUtil";
import StepView from "../views/openViews/StepView.vue";
export  class PageRouter{
    static route =[
        {
            path: '/',
            component: HomeView,
            name: ActionUtil.route.page.home,
        },
        {
            path: '/about',
            component: AboutView,
            name: ActionUtil.route.page.about,
        },
        {
            path: '/step',
            component: StepView,
            name: ActionUtil.route.page.step,
            meta: {authenticated: true}
        },
        {
            path: '/option/evaluation',
            component: OptionStepsView,
            name: ActionUtil.route.page.option,
            meta: {authenticated: true}
        },
        {
            path: '/:catchAll(.*)',
            name: ActionUtil.route.pageNotFound,
            component: PageNotFound
        }
    ]
}