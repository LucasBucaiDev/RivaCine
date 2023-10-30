<script setup>
import { usePeliculasStore } from "../stores/peliculas.js";

const peliculasStore = usePeliculasStore();

const getPeliculas = async () => {
  await peliculasStore.getPeliculas();
};

const obtenerDetalle = async (p) => {
  await peliculasStore.obtenerDetalle(p)
};

if (!peliculasStore.datosCargados) {
  getPeliculas();
}

</script>

<template>
  <main class="mt-4 mx-5">
    <div v-if="peliculasStore.mostrarInfo" class="card mb-3 bg-info-subtle">
      <button
        type="button"
        class="btn-close boton-cerrar"
        aria-label="Close"
        @click="peliculasStore.mostrarInfo = false"
      ></button>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="
              'https://image.tmdb.org/t/p/w500/' +
              peliculasStore.peliculaSeleccionada.backdrop_path
            "
            class="img-fluid rounded-start w-100"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title border-bottom border-danger text-danger">
              {{ peliculasStore.peliculaSeleccionada.title }}
            </h3>
            <p class="card-text">
              {{ peliculasStore.peliculaSeleccionada.overview }}
            </p>
            <p class="card-text">
              <small class="text-body-secondary"
                >Rating: {{ Math.trunc(peliculasStore.peliculaSeleccionada.vote_average) }}</small
              >
              <br />
              <small class="text-body-secondary"
                >Estreno:
                {{
                  peliculasStore.peliculaSeleccionada.release_date.split("-").join("/")
                }}</small
              >
            </p>
            <button class="btn btn-lg btn-success">Comprar</button>
          </div>
        </div>
      </div>
    </div>
    <div v-for="p in peliculasStore.peliculas">
      <img
        class="border border-black rounded"
        :src="'https://image.tmdb.org/t/p/w500/' + p.poster_path"
        @click="obtenerDetalle(p)"
        style="cursor: pointer"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-gap: 10px;
}

img {
  width: 280px;
  height: 400px;
}

.card {
  grid-column: 1 / -1;
  width: 100%;
  margin-bottom: 20px;
}

.boton-cerrar {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
