import { defineStore } from "pinia";
import Service from "../service/movieService.js";

export const usePeliculasStore = defineStore("peliculas", {
  state: () => ({
    peliculas: [],
    peliculaSeleccionada: {
      title: "",
      overview: "",
      vote_average: 0,
      backdrop_path: "",
      release_date: "",
    },
    mostrarInfo: false,
    datosCargados: false,
  }),
  actions: {
    async getPeliculas() {
      const peliculasData = await Service.cargarPeliculas();
      this.peliculas.push(...peliculasData.results);
      this.datosCargados = true;
    },

    async obtenerDetalle(p) {
      for (const key in p) {
        this.peliculaSeleccionada[key] = p[key];
      }
      this.mostrarInfo = true;
    },
  },
});
