import { defineStore } from "pinia";
import router from "../router";

export const useCarritoStore = defineStore("carrito", {
  state: () => ({
    productos: [],
    datosCargados: false,
  }),
  actions: {
    async guardarProducto(productoAComprar) {
      let nuevoProducto = {
        nombre: productoAComprar.nombre || productoAComprar.title,
        precio: productoAComprar.precio || 3000,
        cantidad: 1,
      };
      this.productos.push(nuevoProducto);
    },

    async eliminarProducto(index) {
      this.productos.splice(index, 1);
    },

    limpiarProductos() {
      this.productos = [];
    },
  },
});
