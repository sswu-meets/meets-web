import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';
import axios from 'axios';

import App from './App.vue'
import Home from './components/Home.vue';
import GoogleLogin from './controller/GoogleLogin.vue'


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
    ]
})


const app = createApp(App);
app.use(router);

axios.defaults.baseURL = 'http://localhost:8080'; 
axios.defaults.withCredentials = true;

app.mount('#app');