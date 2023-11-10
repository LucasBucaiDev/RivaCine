<script setup>
import { useUsuariosStore } from "../../stores/usuarios.js";

const usuariosStore = useUsuariosStore();

const getUsuarios = async () => {
    await usuariosStore.getUsuarios();
};

if (!usuariosStore.datosCargados) {
    getUsuarios();
}

</script>

<template>
    <main>
        <div style="display: flex; justify-content: center;">
            <table class="table table-striped table-dark table-bordered table-hover" style="margin: auto;">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contraseña</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="usuario in usuariosStore.usuarios">
                        <th>{{ usuario._id }}</th>
                        <td>{{ usuario.email }}</td>
                        <td>{{ usuario.password }}</td>
                        <td>{{ usuario.rol }}</td>
                        <td>
                            <button @click="usuariosStore.editarUsuario(usuario._id, usuario)"
                                class="btn btn-outline-primary">Editar</button>
                            <button @click="usuariosStore.borrarUsuario(usuario._id)" class="btn btn-outline-danger"
                                style="margin-left: 20px">Borrar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button @click="usuariosStore.agregarUsuario()" class="btn btn-outline-primary btn-lg" style="margin: 20px;">
            Agregar </button>
    </main>
</template>

