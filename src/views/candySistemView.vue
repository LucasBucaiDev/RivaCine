<script setup>
import { useCandyStore } from "../stores/candy.js";

const candyStore = useCandyStore();

const getCandy = async () => {
  await candyStore.getCandy();
};

if (!candyStore.datosCargados) {
  getCandy();
}
</script>

<template>
  <main>
    <div style="display: flex; justify-content: center;">
      <table class="table" style="margin: auto;">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in candyStore.tienda">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.nombre }}</td>
            <td>{{ item.precio }}</td>
            <td>{{ item.descripcion }}</td>
            <td>
              <button @click="editarItem(item)" class="btn btn-primary">Editar</button>
              <button @click="borrarItem(item)" class="btn btn-danger" style="margin-left: 20px">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>


