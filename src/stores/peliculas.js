import { defineStore } from 'pinia'
import Service from "../service/service.js";

export const usePeliculasStore = defineStore('peliculas', {
    state: () => ({
        peliculas: [],
        peliculaSeleccionada: {
            title: "",
            overview: "",
            vote_average: 0,
            backdrop_path: "",
            release_date: ""
        },
        mostrarInfo: false,
        datosCargados: false
    }),
    actions: {
        async getPeliculas() {
            const peliculasData = await Service.cargarPeliculas(1);
            const proximasPeliculasData = await Service.cargarPeliculas(2);
            this.peliculas.push(...peliculasData.results, ...proximasPeliculasData.results);
            this.datosCargados = true; 
          },

        async obtenerDetalle(p) {
            for (const key in p) {
                this.peliculaSeleccionada[key] = p[key];
              }
              this.mostrarInfo = true;
              window.scrollTo(0, 0);
        }
    }

})