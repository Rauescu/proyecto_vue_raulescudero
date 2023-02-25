<script setup>
// Importamos los paquetes de vue que vamos a utilizar
import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
// Declaramos las variables necesarias
const db = useFirestore();
const sos = useCollection(collection(db, 'sos'));

</script>

<template>
    <h1>SOs</h1>
    <br>
    <!-- Listamos los cursos de esta categoria -->
    <div v-for="curso in sos" :key="curso.id" class="curso">
        <h2>{{ curso.nombre }}</h2>
        <p>{{ curso.duracion }}Horas</p>
        <p>{{ curso.categoria }}</p>
        <img :src="`http://localhost:5173/src/assets/cursos/${curso.imagen}`" alt="Imagen Curso" class="fotos">
        <button>Inscribirse</button>
    </div>
</template>
    
<style>
.curso{
    border: solid 2px rgb(255, 255, 255);
    margin-left: 40%;
    margin-right: 40%;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
    padding: 20px;
}

.fotos {
    width: 100px;
}
</style>