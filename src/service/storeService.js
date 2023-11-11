import axios from "axios";

const candy = axios.create({
  baseURL: "http://localhost:3031/api/store",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async cargarCandy(id) {
    try {
      if (id) {
        const item = await candy.get("/" + id);
        return item;
      } else {
        const response = await candy.get("/");
        return response.data;
      }
    } catch (error) {
      throw "Error al obtener datos de candy";
    }
  },

  async borrarItem(id) {
    try {
      await candy.delete("/" + id);
    } catch (error) {
      throw "Error al borrar item";
    }
  },

  async guardarProducto(elem) {
    try {
      await candy.post("/", elem);
    } catch (error) {
      throw "Error al guardar producto";
    }
  },

  async actualizarItem(elem) {
    try {
      await candy.put("/", elem);
    } catch (error) {
      throw "Error al enviar";
    }
  },
};
