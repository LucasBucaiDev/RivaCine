<script setup>

</script>

<template>
  <main>
    <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body data-bs-theme="dark">
  <div class="formulario-centrado" >
    <form>
      <div class="form-group">
        <label for="email"><h3>Email:</h3></label><br>
        <input type="email" class="form-control form-control-lg" id="email" placeholder="Ingresa email"><br>
      </div>
      <div class="form-group">
        <label for="pwd"><h3>Contraseña:</h3></label>
        <input type="password" class="form-control form-control-lg" id="pwd" placeholder="Ingresa contraseña"><br>
      </div>
      <button type="submit" class="btn btn-primary btn-lg">Registrate</button>
    </form>
  </div>
</body>
  </main>
</template>


<style>
.formulario-centrado {
  min-height: 50vh; /* altura mínima de 100% de la vista de la ventana */
  display: flex;
  align-items: center; /* centra verticalmente */
  justify-content: center; /* centra horizontalmente */
}
</style>