<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand"><RouterLink to="/" class="RouterStyle"> RivaCine </RouterLink></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"> <RouterLink to="/tienda" class="RouterStyle"> Tienda </RouterLink> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"> <RouterLink to="/login" class="RouterStyle"> Login </RouterLink> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"> <RouterLink to="/conocenos" class="RouterStyle"> Conocenos </RouterLink> </a>
        </li>
      </ul>
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