import { defineStore } from "pinia";
import Service from "../service/service.js";
import router from "../router/index.js";

export const useUsuariosStore = defineStore("usuarios", {
  state: () => ({
    usuarios: [],
    usuario: {
      email: "",
      password: "",
      rol: "",
    },
    login: false,
    admin: false,
    datosCargados: false,
  }),
  actions: {
    async enviarRegistro() {
      try {
        this.rol = "usuario";
        await Service.guardarDatos(this.usuario);
        router.push("/login");
      } catch (error) {
        console.error(error);
      }
    },

    async esAdmin() {
      if (this.usuario.email == "admin@gmail.com") {
        this.admin = true;
      }
    },

    async iniciarSesion() {
      try {
        const datos = await Service.login(this.usuario);
        if (datos.status == 200) {
          this.login = true;
          localStorage.setItem(
            "usuario",
            JSON.stringify({ email: this.usuario.email, token: datos.data })
          );
          this.esAdmin();
          router.push("/");
        } else {
          this.login = false;
        }
      } catch (error) {
        throw "Error de conexion";
      }
    },

    async cerrarSesion() {
      localStorage.removeItem(this.usuario);
      this.login = false;
      this.admin = false;
    },

    async getUsuarios() {
      const usuarios = await Service.cargarDatos();
      this.usuarios.push(...usuarios);
      this.datosCargados = true;
    },

    async agregarUsuario() {
      router.push("/addUser");
    },

    async borrarUsuario(id) {
      try {
        await Service.borrarDatos(id);
        this.usuarios = [];
        this.datosCargados = false;
        router.push("/");
      } catch (error) {
        throw "Error al borrar usuario";
      }
    },
  },
});
