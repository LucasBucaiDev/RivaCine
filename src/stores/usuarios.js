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
    usuarioAEditar: {},
    usuarioBuscado: {},
    login: false,
    admin: false,
    datosCargados: false,
  }),
  actions: {
    async actualizarTabla() {
      this.usuarios = [];
      this.datosCargados = false;
    },

    async enviarRegistro() {
      try {
        this.usuario.rol = "usuario";
        await Service.guardarDatos(this.usuario);
        this.actualizarTabla();
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

    async getUsuarios(id) {
      if (id) {
        const usuario = await Service.cargarDatos(id);
        this.usuarioBuscado = usuario.data;
      } else {
        const usuarios = await Service.cargarDatos();
        this.usuarios.push(...usuarios);
      }
      this.datosCargados = true;
    },

    async agregarUsuario() {
      router.push("/addUser");
    },

    async guardarUsuarioAEditar(usuario) {
      this.usuarioAEditar = usuario;
      router.push("/editUser");
    },

    async editarUsuario() {
      const usuarioNuevo = { ...this.usuarioAEditar, ...this.usuario };
      await Service.actualizarDatos(usuarioNuevo);
      this.actualizarTabla();
      router.push("/usersSystem");
    },

    async borrarUsuario(id) {
      try {
        this.getUsuarios(id);
        await Service.borrarDatos(id);
        this.actualizarTabla();
        console.log(this.usuarioBuscado);
        router.push("/deleted");
      } catch (error) {
        throw "Error al borrar usuario";
      }
    },
  },
});
