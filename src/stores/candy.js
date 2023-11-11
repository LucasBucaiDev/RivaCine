import { defineStore } from "pinia";
import Service from "../service/service.js";
import router from "../router";

export const useCandyStore = defineStore("candy", {
  state: () => ({
    tienda: [],
    producto: {
      nombre: "",
      precio: 0,
      descripcion: "",
      img: "",
    },
    itemAEditar: {},
    itemBuscado: {},
    datosCargados: false,
  }),
  actions: {
    async actualizarTabla() {
      this.tienda = [];
      this.datosCargados = false;
    },

    async getCandy(id) {
      if (id) {
        const item = await Service.cargarCandy(id);
        this.itemBuscado = item.data;
      } else {
        const items = await Service.cargarCandy();
        this.tienda.push(...items);
      }
      this.datosCargados = true;
    },

    async guardarProducto() {
      try {
        await Service.guardarProducto(this.producto);
        this.actualizarTabla();
      } catch (error) {
        console.error(error);
      }
    },

    async agregarItem() {
      router.push("/addItem");
    },

    async borrarItem(id) {
      try {
        this.getCandy(id);
        await Service.borrarItem(id);
        this.actualizarTabla();
        router.push("/deletedItem");
      } catch (error) {
        throw "Error al borrar item";
      }
    },

    async guardarItemAEditar(item) {
      this.itemAEditar = item;
      router.push("/editItem");
    },

    async editarItem() {
      const itemNuevo = { ...this.itemAEditar, ...this.producto };
      await Service.actualizarItem(itemNuevo);
      this.actualizarTabla();
      router.push("/candySystem");
    },
  },
});
