<script setup>
import { useUsuariosStore } from "../../stores/usuarios.js";

const usuariosStore = useUsuariosStore();

const enviarRegistro = async () => {
  await usuariosStore.enviarRegistro();
};

</script>

<template>
  <main>

    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>

    <body>
      <div class="formulario-centrado bg-primary-subtle ">
        <form @submit.prevent="enviarRegistro">
          <div class="form-group">
            <label for="email">
              <h3>Email:</h3>
            </label><br />
            <input type="email" class="form-control form-control-lg" id="email" placeholder="Ingresa email"
              v-model="usuariosStore.usuario.email" /><br />
          </div>
          <div class="form-group">
            <label for="password">
              <h3>Contraseña:</h3>
            </label>
            <input type="password" class="form-control form-control-lg" id="password" placeholder="Ingresa contraseña"
              v-model="usuariosStore.usuario.password" /><br />
          </div>
          <div class="form-group">
            <label for="rol">
              <h3>Rol:</h3>
            </label>
            <select v-model="usuariosStore.usuario.rol" class="form-select" id="floatingSelect"
              aria-label="Floating label select example">
              <option selected>Rol</option>
              <option value="admin">Admin</option>
              <option value="usuario">Usuario</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary btn-lg" style="margin-top: 20px;">
            Agregar
          </button>
        </form>
      </div>
    </body>
  </main>
</template>


<style>
.formulario-centrado {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
