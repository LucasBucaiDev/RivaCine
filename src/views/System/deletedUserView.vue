<script setup>
import { useUsuariosStore } from "../../stores/usuarios.js";
import router from '../../router'
const usuariosStore = useUsuariosStore();

const volver = async () => {
    router.push("/usersSystem")
};

</script>

<template>
    <main>
        <h1>Usuario Borrado:</h1>
        <div style="display: flex; justify-content: center;">
            <table class="table table-bordered table-striped" style="margin: auto;">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contraseña</th>
                        <th scope="col">Rol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{{ usuariosStore.usuarioBuscado._id }}</th>
                        <td>{{ usuariosStore.usuarioBuscado.email }}</td>
                        <td>{{ usuariosStore.usuarioBuscado.password }}</td>
                        <td>{{ usuariosStore.usuarioBuscado.rol }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button @click="volver" class="btn btn-outline-primary btn-lg" style="margin: 20px;">
            Volver </button>
    </main>
</template>

