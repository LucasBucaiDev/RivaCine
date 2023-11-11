<script setup>
import { useCandyStore } from "../../stores/candy.js";
import router from "../../router";

const candyStore = useCandyStore();

const guardarProducto = async () => {
  await candyStore.guardarProducto();
  router.push("/candySystem");
};

</script>

<template>
  <main>

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>

    <body>
      <div class="formulario-centrado bg-primary-subtle ">
        <form @submit.prevent="guardarProducto">
          <div class="form-group">
            <label for="nombre">
              <h3>Nombre:</h3>
            </label><br />
            <input type="text" class="form-control form-control-lg" id="nombre" placeholder="Ingresa nombre"
              v-model="candyStore.producto.nombre" /><br />
          </div>
          <div class="form-group">
            <label for="precio">
              <h3>Precio:</h3>
            </label>
            <input type="number" class="form-control form-control-lg" id="precio" placeholder="Ingresa precio"
              v-model="candyStore.producto.precio" /><br />
          </div>
          <div class="form-group">
            <label for="descripcion">
              <h3>Descripcion:</h3>
            </label><br />
            <input type="text" class="form-control form-control-lg" id="descripcion" placeholder="Ingresa descripcion"
              v-model="candyStore.producto.descripcion" /><br />
          </div>
          <div class="form-group">
            <label for="img">
              <h3>Imagen:</h3>
            </label><br />
            <input type="text" class="form-control form-control-lg" id="img" placeholder="Ingresa imagen"
              v-model="candyStore.producto.img" /><br />
          </div>
          <button type="submit" class="btn btn-primary btn-lg" style="margin-top: 20px;">
            Agregar
          </button>
        </form>
      </div>
    </body>
  </main>
</template>


<style>
.formulario-centrado {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
