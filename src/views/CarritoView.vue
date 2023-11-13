<script setup>
import { useCarritoStore } from "../stores/carrito.js";
import { ref } from 'vue';
import { onBeforeRouteLeave } from "vue-router";

const carritoStore = useCarritoStore();

let mostrarTabla = ref(true)
let mostrarTicket = ref(false)

const comprar = async () => {
  mostrarTabla.value = false
  mostrarTicket.value = true
}

const calcularTotal = () => {
  return carritoStore.productos.reduce((total, item) => {
    return total + (item.cantidad * item.precio);
  }, 0);
}

onBeforeRouteLeave((to, from, next) => {
  carritoStore.productos = [];
  next();
});

</script>

<template>
  <main>
    <h1 class="text-center">Carrito</h1>
    <div class="alert alert-success text-center" role="alert" v-if="mostrarTicket" style="width: 50%; margin-left: 25%;">
      <h4 class="alert-heading">Compra realizada</h4>
      <div v-for="item in carritoStore.productos">
        <p>{{ item.cantidad }}x - {{ item.nombre }} - ${{ item.precio }}</p>
      </div>
      <hr>
      <p>Total a pagar: ${{ calcularTotal() }}</p>
      <hr>
      <p class="mb-0">Retire su compra en la sucursal mas cercana.</p>
    </div>
    <div style="display: flex; justify-content: center;" v-if="mostrarTabla">
      <table class="table table-striped table-dark table-bordered table-hover" style="margin: auto;">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in carritoStore.productos" :key="index">
            <td>{{ item.nombre }}</td>
            <td>{{ item.precio }}</td>
            <td>
              <input type="number" class="form-control text-center" v-model="item.cantidad" min="1" style="width: 90px;">
            </td>
            <td>
              <button class="btn btn-outline-danger" style="margin-left: 20px"
                @click="carritoStore.eliminarProducto(index)">Borrar</button>
            </td>
          </tr>
        </tbody>
        <button type="submit" class="btn btn-outline-primary btn-lg" style="margin: 20px;" @click="comprar">
          Comprar
        </button>
      </table>
    </div>
  </main>
</template>


