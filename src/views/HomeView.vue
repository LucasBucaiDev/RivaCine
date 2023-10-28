<script setup>
import Service from "../service/service.js";
import { reactive, ref, onMounted } from "vue";

const peliculas = reactive([]);
const peliculaSeleccionada = reactive({
  title: "",
  overview: "",
  vote_average: 0,
  backdrop_path: "",
  release_date: "",
});

let mostrarInfo = ref(false);

const getPeliculas = async () => {
  const peliculasData = await Service.cargarPeliculas(1);
  const proximasPeliculasData = await Service.cargarPeliculas(2);
  peliculas.push(...peliculasData.results, ...proximasPeliculasData.results);
};

const obtenerDetalle = async (p) => {
  for (const key in p) {
    peliculaSeleccionada[key] = p[key];
  }
  mostrarInfo.value = true;
  window.scrollTo(0, 0);
};

onMounted(() => {
  getPeliculas();
});

</script>

<template>
  <main class="mt-4 mx-5">
    <div v-if="mostrarInfo" class="card mb-3 bg-info-subtle">
      <button
        type="button"
        class="btn-close boton-cerrar"
        aria-label="Close"
        @click="mostrarInfo = false"
      ></button>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="
              'https://image.tmdb.org/t/p/w500/' +
              peliculaSeleccionada.backdrop_path
            "
            class="img-fluid rounded-start w-100"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title border-bottom border-danger text-danger">
              {{ peliculaSeleccionada.title }}
            </h3>
            <p class="card-text">
              {{ peliculaSeleccionada.overview }}
            </p>
            <p class="card-text">
              <small class="text-body-secondary"
                >Rating: {{ peliculaSeleccionada.vote_average }}</small
              >
              <br />
              <small class="text-body-secondary"
                >Estreno:
                {{
                  peliculaSeleccionada.release_date.split("-").join("/")
                }}</small
              >
            </p>
            <button class="btn btn-lg btn-success">Comprar</button>
          </div>
        </div>
      </div>
    </div>
    <div v-for="p in peliculas">
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
