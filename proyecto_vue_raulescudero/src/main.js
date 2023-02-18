import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
// import { onAuthStateChanged } from "firebase/auth";
import HelloWorld from "./components/inicio.vue"
import Ofimatica from "./components/ofimatica.vue"
import Programacion from "./components/programacion.vue"
import SOS from "./components/sos.vue"
import Login from "./components/login.vue"



import { createRouter, createWebHistory } from 'vue-router'
// import { auth } from "./firebase"


// let estaAutenticado = false;

const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/ofimatica',
        component: Ofimatica
    },
    {
        path: '/programacion',
        component: Programacion
    },
    {
        path: '/sos',
        component: SOS
    },
    {
        path: '/login',
        component: Login
    },
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         const uid = user.uid;
//         estaAutenticado = true;

//         // ...
//     } else {
//         // User is signed out
//         // ...
//         estaAutenticado = false;
//         router.push("/");
//     }
// });

const app = createApp(App)
app.use(router)
app.mount('#app')
