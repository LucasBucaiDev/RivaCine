<script setup>
import Service from '../service/service.js'
import { reactive, onMounted } from 'vue'

const peliculas = reactive([]);

const getPeliculas = async() => {
      const data = await Service.cargarPeliculas()
      peliculas.push(...data.results) 
}

onMounted(() => {
  getPeliculas()
})

</script>

<template>
  <main class="mt-4 mx-5">
    <div v-for="p in peliculas">
      <img class="border border-black rounded" :src="'https://image.tmdb.org/t/p/w500/' + p.poster_path " />
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

</style>