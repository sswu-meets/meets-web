import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';
import App from './App.vue'
import Home from './components/Home.vue';
import GoogleLogin from './controller/GoogleLogin.vue'
 
import axios from 'axios'

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
        }
    ]
})


const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(router);

app.mount('#app');