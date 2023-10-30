import { defineStore } from 'pinia'
import Service from "../service/service.js";

export const useCandyStore = defineStore('candy', {
    state: () => ({
        tienda: [],
        datosCargados: false
    }),
    actions: {
        async getCandy() {
            const data = await Service.cargarCandy();
            this.tienda.push(...data);
            this.datosCargados = true; 
        }
    }
})