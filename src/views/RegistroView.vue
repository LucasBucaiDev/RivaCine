<script setup>
import Service from '../service/service.js'

const datos = {
  email: '',
  password: '',
}

const enviarRegistro = async () => {
  try {
    await Service.guardarDatos(datos);
  } catch (error) {
    console.error(error);
  }
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
            <label for="email"><h3>Email:</h3></label><br />
            <input
              type="email"
              class="form-control form-control-lg"
              id="email"
              placeholder="Ingresa email"
              v-model="datos.email"
            /><br />
          </div>
          <div class="form-group">
            <label for="password"><h3>Contraseña:</h3></label>
            <input
              type="password"
              class="form-control form-control-lg"
              id="password"
              placeholder="Ingresa contraseña"
              v-model="datos.password"
            /><br />
          </div>
          <button type="submit" class="btn btn-primary btn-lg">
            Registrate
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
