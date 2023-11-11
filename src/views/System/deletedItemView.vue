<script setup>
import { useCandyStore } from "../../stores/candy.js";
import router from '../../router'
const candyStore = useCandyStore();

const volver = async () => {
    router.push("/candySystem")
};

</script>

<template>
    <main>
        <h1>Item Borrado:</h1>
        <div style="display: flex; justify-content: center;">
            <table class="table table-bordered table-striped" style="margin: auto;">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{{ candyStore.itemBuscado._id }}</th>
                        <td>{{ candyStore.itemBuscado.nombre }}</td>
                        <td>{{ candyStore.itemBuscado.precio }}</td>
                        <td>{{ candyStore.itemBuscado.descripcion }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button @click="volver" class="btn btn-outline-primary btn-lg" style="margin: 20px;">
            Volver </button>
    </main>
</template>

