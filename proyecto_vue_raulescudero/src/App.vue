<script setup>
import HelloWorld from './components/inicio.vue'
import TheWelcome from './components/TheWelcome.vue'
import { auth } from "./firebase"
import {onAuthStateChanged} from "firebase/auth";
import {ref} from "vue";
import { signOut } from "firebase/auth";
import { autenticado } from './main.js'
let nombreUsuario = ref("");
function cerrarSession() {
  signOut(auth).then(() => {
    // Sign-out successful.
    nombreUsuario.value = "";
    router.push('/inicio.vue');

  }).catch((error) => {
    // An error happened.
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    nombreUsuario.value = user.email;
  }
});


var Loading=(loadingDelayHidden=0)=>{let loading=null;const myLoadingDelayHidden=loadingDelayHidden;let imgs=[];let lenImgs=0;let counterImgsLoading=0;function incrementCounterImgs(){counterImgsLoading+=1;if(counterImgsLoading===lenImgs){hideLoading()}}function hideLoading(){if(loading!==null){loading.classList.remove('show');setTimeout(function(){loading.remove()},myLoadingDelayHidden)}}function init(){document.addEventListener('DOMContentLoaded',function(){loading=document.querySelector('.loading');imgs=Array.from(document.images);lenImgs=imgs.length;if(imgs.length===0){hideLoading()}else{imgs.forEach(function(img){img.addEventListener('load',incrementCounterImgs,false)})}})}return{'init':init}}

Loading(1000).init();

</script>

<template>
  <div class="loading show">
    <div class="spin"></div>
  </div>
  <v-app>
    <nav>
      {{ nombreUsuario }}
      |
      <router-link to="/">Inicio</router-link>
      |
      <router-link to="/ofimatica">Ofimatica</router-link>
      |
      <router-link to="/programacion">Programacion</router-link>
      |
      <router-link to="/sos">SOs</router-link>
      |
      <router-link v-if="nombreUsuario != ''" to="/administracion"> Administracion</router-link>
      |
      <router-link v-if="nombreUsuario == ''"  to="/login"> Login</router-link>
      |
      <button v-if="nombreUsuario != ''" id="salir" @click="cerrarSession"> Salir</button>
      |
      <router-link v-if="nombreUsuario == ''" to="/registro">Registro</router-link>

    </nav>

    <main>
      <br>
      <br>
      <router-view></router-view>

    </main>

    <v-footer>
      <p>Raúl Escudero López</p>
      <a href="#">Politica de Privacidad</a>
      &nbsp; || &nbsp;
      <a href="#">rauescucompany@gmail.com</a>
    </v-footer>

  </v-app>
</template>


<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: 1s all;
  opacity: 0;
}
.loading.show {
  opacity: 1;
}
.loading .spin {
  border: 3px solid hsla(185, 100%, 62%, 0.2);
  border-top-color: #3cefff;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}</style>
