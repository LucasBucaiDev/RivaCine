<script setup>
import { useCandyStore } from "../stores/candy.js";
import { useCarritoStore } from "../stores/carrito.js";


const carritoStore = useCarritoStore();
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
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/candy/680.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/candy/762.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/candy/768.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/candy/769.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="container">
      <div class="row">
        <div v-for="item in candyStore.tienda" :key="item.id" class="col-md-3">
          <div class="card" style="margin-top: 20px;">
            <img :src="item.img" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ item.nombre }}</h5>
              <p class="card-text">{{ item.descripcion }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Precio: ${{ item.precio }}</li>
            </ul>
            <a href="#" class="btn btn-primary" @click="carritoStore.guardarProducto(item)">Comprar</a>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
.carousel-item {
  height: 400px;
}

.carousel-item img {
  height: 400px;
}

.row {
  margin-bottom: 20px;
}
</style>
