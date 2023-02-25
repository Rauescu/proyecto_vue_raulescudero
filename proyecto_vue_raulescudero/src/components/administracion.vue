<script setup>
// Importamos todos los paquetes de vue que necesitamos
import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'

// Creamos la variable de la base de datos
const db = useFirestore();

function addcurso() {
    // Funcion para añadir un curso
    if (document.getElementById("categoria").value != '') {
        // Añadimos un curso en la base de datos en la categoria que introducimos abajo y le metemos los siguientes valores
        const docRef = addDoc(collection(db, document.getElementById("categoria").value), {
            // Los datos que hemos introducido al crear el curso son los siguientes:
            nombre: document.getElementById("nombre").value,
            duracion: document.getElementById("duracion").value,
            imagen: document.getElementById("imagen").value
        });
    }

}
// Creamos las 3 constantes por las 3 categorias que queremos listar los datos 
const programacion = useCollection(collection(db, 'programacion'));
const ofimatica = useCollection(collection(db, 'ofimatica'));
const sos = useCollection(collection(db, 'sos'));

// Funcion para borrar el curso al que le pasamos la categoria en la que se encuentra el curso y su id
function borrarCurso(id, categoria) {
    deleteDoc(doc(db, categoria, id))
}


function updateCurso(id, categoria) {
    // Funcion para actualizar los datos del curso
    const cursoRef = doc(db, categoria, id);
    updateDoc(cursoRef, {
        // Los campos que vamos a actualiar:
        nombre: document.getElementById("nombre").value,
        duracion: document.getElementById("duracion").value,
        imagen: document.getElementById("imagen").value
    })
        .then(() => {
            console.log('El curso se ha actualizado correctamente');
        })
        .catch((error) => {
            console.error('Error al actualizar intentelo mas tarde.', error);
        });
}
</script>
<template>
    <!-- Formulario para crear el curso -->
    <h1>Area de Administracion</h1>
    <div class="greetings">
        <h2>Crear Curso</h2>
        <br>
        <label for="categoria">Categoria</label>
        <br>
        <select name="categoria" v-model="categoria" id="categoria">
            <option value="programacion">Programacion</option>
            <option value="ofimatica">Ofimatica</option>
            <option value="sos">SOs</option>
        </select>
        <br>
        <label for="nombre">Nombre</label>
        <br>
        <input type="text" v-model="nombre" id="nombre">
        <br>
        <label for="duracion">Duración</label>
        <br>
        <input type="text" v-model="duracion" id="duracion">
        <br>
        <label for="imagen">Imagen</label>
        <br>
        <input type="text" v-model="imagen" id="imagen">
        <br>
        <button @click="addcurso()">Crear Curso</button>

        <!-- Listamos los cursos -->
        <h2>Programacion</h2>
        <br>
        <div v-for="curso in programacion" :key="curso.id" class="curso">
            <h2>{{ curso.nombre }}</h2>
            <p>{{ curso.duracion }} Horas</p>
            <p>{{ curso.categoria }}</p>
            <img :src="`https://proyectovue-90870.web.app/assets/${curso.imagen}`" alt="Imagen Curso" class="fotos">
            <!-- Si ejecutamos el proyecto en localhost comente la linea de arriba y descomente la de abajo -->
            <!-- <img :src="`http://localhost:5173/src/assets/cursos/${curso.imagen}`" alt="Imagen Curso" class="fotos"> -->
            <!-- Botones para realizar acciones -->
            <button @click="borrarCurso(curso.id, 'programacion')">Borrar</button>
            <br>
            <p>Rellene el formulario de creacion y pulse editar</p>
            <br>
            <button @click="updateCurso(curso.id, 'programacion')">Editar</button>
        </div>

        <!-- Listamos los cursos -->
        <br>
        <h2>Ofimatica</h2>
        <br>
        <div v-for="curso in ofimatica" :key="curso.id" class="curso">
            <h2>{{ curso.nombre }}</h2>
            <p>{{ curso.duracion }}Horas</p>
            <p>{{ curso.categoria }}</p>
            <img :src="`https://proyectovue-90870.web.app/assets/${curso.imagen}`" alt="Imagen Curso" class="fotos">
            <!-- Si ejecutamos el proyecto en localhost comente la linea de arriba y descomente la de abajo -->
            <!-- <img :src="`http://localhost:5173/src/assets/cursos/${curso.imagen}`" alt="Imagen Curso" class="fotos"> -->
            <!-- Botones para realizar acciones -->
            <button @click="borrarCurso(curso.id, 'ofimatica')">Borrar</button>
            <br>
            <p>Rellene el formulario de creacion y pulse editar</p>
            <br>
            <button @click="updateCurso(curso.id, 'ofimatica')">Editar</button>
        </div>

        <br>
        <!-- Listamos los cursos -->
        <h2>SOs</h2>
        <br>
        <div v-for="curso in sos" :key="curso.id" class="curso">
            <h2>{{ curso.nombre }}</h2>
            <p>{{ curso.duracion }}Horas</p>
            <p>{{ curso.categoria }}</p>
            <img :src="`https://proyectovue-90870.web.app/assets/${curso.imagen}`" alt="Imagen Curso" class="fotos">
            <!-- Si ejecutamos el proyecto en localhost comente la linea de arriba y descomente la de abajo -->
            <!-- <img :src="`http://localhost:5173/src/assets/cursos/${curso.imagen}`" alt="Imagen Curso" class="fotos"> -->
            <!-- Botones para realizar acciones -->
            <button @click="borrarCurso(curso.id, 'sos')">Borrar</button>
            <br>
            <p>Rellene el formulario de creacion y pulse editar</p>
            <br>
            <button @click="updateCurso(curso.id, 'sos')">Editar</button>
        </div>
        <br>
    </div>
</template>

<style scoped>
.curso {
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
