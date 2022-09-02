import HomeView from '../views/openViews/HomeView.vue'
import AboutView from '../views/openViews/AboutView.vue'
import PageNotFound from '../views/openViews/PageNotFound.vue'
import {ActionUtil} from "../util/baseUtils/ActionUtil";
import StepView from "../views/openViews/StepView.vue";
import ContactView from "../views/openViews/ContactView.vue";
import WelcomeStepViews from "../views/openViews/WelcomeStepViews.vue";
import EvaluateOptionsView from "../views/openViews/EvaluateOptionsView.vue";
import CareerFieldView from "../views/openViews/CareerFieldView.vue";
import CoursesView from "../views/openViews/CoursesView.vue";
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
            path: '/contact',
            component: ContactView,
            name: ActionUtil.route.page.contact
        },
        {
            path: '/step',
            component: StepView,
            name: ActionUtil.route.page.step,
            meta: {authenticated: true}
        },

        {
            path: '/evaluate/options',
            component: EvaluateOptionsView,
            name: ActionUtil.route.page.evaluateSteps,
            meta: {authenticated: true}
        },
        {
            path: '/career/fields',
            component: CareerFieldView,
            name: ActionUtil.route.page.careerFields,
            meta: {authenticated: true}
        },
        {
            path: '/courses',
            component: CoursesView,
            name: ActionUtil.route.page.courses
        },
        {
            path: '/:catchAll(.*)',
            name: ActionUtil.route.pageNotFound,
            component: PageNotFound
        }
    ]
}