<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="desc">
    <h1>Rauescu Company</h1>
    <h3>Cursos Online</h3>
    <p>Cursos online, en todo el mundo!!
      <br>
      Informatica -- Telecomunicaciones -- Programacion
      <br>
      Encuentranos hasta en Pakistan, Estados Unidos o Turquia!! Alli donde estes llegaran nuestros cursos,
      que mejor que confiar en Rauescu Company para tus cursos. Que me dices, ¿Te vienes con nosotros?
    </p>
  </div>
  <img src="../assets/vue-foto.jpg" alt=""></template>

<style scoped>
  .desc{
    width: 400px;
  }

</style>
