<script setup>
import { ref } from "vue";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js"
let usuario=ref(""),password=ref("");
function altaUsuario(){
    createUserWithEmailAndPassword(auth, usuario.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
</script>
<template>
    Usuario: <input type="text" v-model="usuario">
    Password: <input type="password" v-model="password">
    <p><button @click="altaUsuario">Registrese :)</button></p>
</template>