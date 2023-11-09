import { defineStore } from "pinia";
import Service from "../service/service.js";
import router from "../router/index.js";

export const useUsuariosStore = defineStore("usuarios", {
  state: () => ({
    usuario: {
      email: "",
      password: "",
      rol: "usuario",
    },
    login: false,
  }),
  actions: {
    async enviarRegistro() {
      try {
        await Service.guardarDatos(this.usuario);
        router.push("/login");
      } catch (error) {
        console.error(error);
      }
    },
    // async iniciarSesion() {
    //   try {
    //     const datos = await Service.cargarDatos();
    //     const usuario = datos.find(
    //       (u) =>
    //         u.email == this.datos.email && u.password == this.datos.password
    //     );
    //     if (usuario != null) {
    //       localStorage.setItem(
    //         "usuario",
    //         JSON.stringify({
    //           email: usuario.email,
    //         })
    //       );
    //       this.login = true;
    //       router.push("/");
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

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
      // const datos = await Service.cargarDatos();
      // const usuario = datos.find(
      //   (u) => u.email == this.datos.email && u.password == this.datos.password
      // );
      localStorage.removeItem(this.usuario);
      this.login = false;
    },
  },
});
