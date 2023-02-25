// Importamos todas los paquetes que vamos a necesitar
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { onAuthStateChanged } from "firebase/auth";
import HelloWorld from "./components/inicio.vue"
import Ofimatica from "./components/ofimatica.vue"
import Programacion from "./components/programacion.vue"
import SOS from "./components/sos.vue"
import Login from "./components/login.vue"
import Registro from "./components/registro.vue"
import Administracion from "./components/administracion.vue"
import { auth } from "./firebase"



import { createRouter, createWebHistory } from 'vue-router'
// import { auth } from "./firebase"

// Establecemos las rutas pertinentes que necesitamos utilizar
let estaAutenticado = false;

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
    {
        path: '/registro',
        component: Registro
    },
    {
        path: '/administracion',
        component: Administracion,
        beforeEnter: (to, from) => {
            if (estaAutenticado) {
                return true
            } else {
                return false
            }
        }
    },

]
const router = createRouter({
    history: createWebHistory(),
    routes
})

onAuthStateChanged(auth, (user) => {

    if (user) {
        const uid = user.uid;
        estaAutenticado = true;
    } else {
        estaAutenticado = false;
        router.push("/");
    }
})


export var autenticado = true;
const app = createApp(App)
app.use(router)
app.mount('#app')
