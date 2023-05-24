import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';
import axios from 'axios';
import store from "./store";

import App from './App.vue'
import Home from './views/Home.vue';
import ScheduleCreate from './views/ScheduleCreate.vue';
import GoogleLogin from './controller/GoogleLogin.vue';
import ScheduleDetail from './views/ScheduleDetail.vue';


const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'Home',
            component : Home,
        },
        {
            path : '/login/google',
            name : 'GoogleLogin',
            component : GoogleLogin,
        },
        {
            path : "/schedule",
            name : 'ScheduleCreate',
            component: ScheduleCreate,
        },
        {
            path : "/schedule/:no",
            name : "ScheduleDetail",
            component : ScheduleDetail
        }
    ]
})


const app = createApp(App);
app.use(router);
app.use(store);

axios.defaults.baseURL = 'http://localhost:8080'; 
axios.defaults.withCredentials = true;

app.mount('#app');