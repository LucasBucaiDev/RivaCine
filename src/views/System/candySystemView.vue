<script setup>
import { useCandyStore } from "../../stores/candy.js";

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
      <table class="table table-striped table-dark table-bordered table-hover" style="margin: auto;">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in candyStore.tienda">
            <th>{{ item._id }}</th>
            <td>{{ item.nombre }}</td>
            <td>{{ item.precio }}</td>
            <td>{{ item.descripcion }}</td>
            <td>
              <button @click="candyStore.editarItem(item._id)" class="btn btn-outline-primary">Editar</button>
              <button @click="candyStore.borrarItem(item._id)" class="btn btn-outline-danger"
                style="margin-left: 20px">Borrar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="candyStore.agregarItem()" class="btn btn-outline-primary btn-lg" style="margin: 20px;"> Agregar
    </button>
  </main>
</template>


