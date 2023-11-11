import axios from "axios";

const cliente = axios.create({
  baseURL: "http://localhost:3031/api/users",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async cargarDatos(id) {
    try {
      if (id) {
        const usuario = await cliente.get("/" + id);
        return usuario;
      } else {
        const response = await cliente.get("/");
        return response.data;
      }
    } catch (error) {
      throw "Error de conexion";
    }
  },

  async guardarDatos(elem) {
    try {
      await cliente.post("/", elem);
    } catch (error) {
      throw "Error de conexion";
    }
  },

  async borrarDatos(id) {
    try {
      await cliente.delete("/" + id);
    } catch (error) {
      throw "Error de conexion";
    }
  },

  async actualizarDatos(elem) {
    try {
      await cliente.put("/", elem);
    } catch (error) {
      throw "Error al enviar";
    }
  },

  async login(usuario) {
    const res = await cliente.post("/login", usuario);
    return res;
  },
};
