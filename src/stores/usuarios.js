import { defineStore } from "pinia";
import Service from "../service/service.js";
import router from "../router/index.js";

export const useUsuariosStore = defineStore("usuarios", {
  state: () => ({
    usuario: {
      email: "",
      password: "",
      rol: "",
    },
    login: false,
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

    async iniciarSesion() {
      try {
        const datos = await Service.login(this.usuario);
        if (datos.status == 200) {
          this.login = true;
          localStorage.setItem(
            "usuario",
            JSON.stringify({ email: this.usuario.email, token: datos.data })
          );
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
    },
  },
});
