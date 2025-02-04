import { createApp } from 'vue'
import store from './store'
import router from './router'
import './style.css'
import App from './App.vue'
import VueTyped from "vue3-typed-js";

createApp(App)
    .use(VueTyped)
    .use(store)
    .use(router)
    .mount('#app')
