import {createApp} from 'vue'
import pinia from "./util/baseUtils/piniaPersist.js";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import {faXmark, faLocationDot, faBars } from "@fortawesome/free-solid-svg-icons";
import App from './App.vue'
import router from './router'
import './assets/main.css'
import './assets/tailwind.css'
import '../config/config.js'
import {useAuth} from "./stores/auth";
library.add(faXmark, faLocationDot, faBars)

const app = createApp(App)
app.component('fontAwesomeIcon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.mount('#app')
