<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useUsuariosStore } from "./stores/usuarios.js";

const usuariosStore = useUsuariosStore();
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary-subtle">
      <div class="container-fluid">
        <a class="navbar-brand">
          <RouterLink to="/" class="RouterStyle"> RivaCine </RouterLink>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">
                <RouterLink to="/tienda" class="RouterStyle"> Tienda </RouterLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">
                <RouterLink to="/conocenos" class="RouterStyle"> Conocenos </RouterLink>
              </a>
            </li>
          </ul>
          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  👤
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a v-if="!usuariosStore.login" class="dropdown-item" href="#">
                      <RouterLink to="/login" class="RouterStyle"> Login </RouterLink>
                    </a></li>
                  <li><a v-if="!usuariosStore.login" class="dropdown-item" href="#">
                      <RouterLink to="/registro" class="RouterStyle"> Registrate </RouterLink>
                    </a></li>
                  <li><a v-if="usuariosStore.login && !usuariosStore.admin" class="dropdown-item" href="#">
                      <RouterLink to="/" class="RouterStyle"> 🛒 </RouterLink>
                    </a></li>
                  <li><a v-if="usuariosStore.admin" class="dropdown-item" href="#">
                      <RouterLink to="/candySystem" class="RouterStyle">🏪 Candy System </RouterLink>
                    </a></li>
                  <li><a v-if="usuariosStore.admin" class="dropdown-item" href="#">
                      <RouterLink to="/usersSystem" class="RouterStyle">👤 Users System </RouterLink>
                    </a></li>
                  <li><a v-if="usuariosStore.login" class="dropdown-item border-top" href="#">
                      <RouterLink to="/login" class="RouterStyle" @click="usuariosStore.cerrarSesion"> Cerrar Sesion
                      </RouterLink>
                    </a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style>
.RouterStyle {
  text-decoration: none;
  color: inherit;
}
</style>