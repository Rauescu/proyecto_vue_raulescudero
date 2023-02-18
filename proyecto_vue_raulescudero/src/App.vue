<script setup>
import HelloWorld from './components/inicio.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <nav>
    <router-link to="/">Inicio</router-link>
    |
    <router-link to="/ofimatica">Ofimatica</router-link>
    |
    <router-link to="/programacion">Programacion</router-link>
    |
    <router-link to="/sos">SOs</router-link>
    |
    <router-link to="/login">Login</router-link>
  </nav>
  
  <main>
    <br>
    <br>
    <router-view></router-view>

  </main>
</template>

<style scoped>

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
}
</style>
