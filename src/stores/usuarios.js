import { defineStore } from 'pinia'
import Service from "../service/service.js";

export const useUsuariosStore = defineStore('usuarios', {
    state: () => ({
        datos: {
            email: '',
            password: ''
        }
    }),
    actions: {
        async enviarRegistro() {
            try {
                await Service.guardarDatos(this.datos);
              } catch (error) {
                console.error(error);
              }
        }
    }
})