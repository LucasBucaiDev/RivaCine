import axios from 'axios'
const cliente = axios.create({
    baseURL: 'https://6539b55be3b530c8d9e89ccd.mockapi.io/usuario',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async cargarDatos() {
        try {
            const response = await cliente.get('/');
            return response.data
        } catch (error) {
            throw "Error de conexion"
        }
    },
    async guardarDatos(elem) {
        try {
            await cliente.post('/', elem);
        } catch (error) {
            throw "Error de conexion"
        }
    },
    async borrarDatos(id) {
        try {
            await cliente.delete("/" + id)
        } catch (error) {
            throw "Error de conexion"
        }
    },
    async actualizarDatos(id, elem) {
        try {
            await cliente.put("/" + id, elem)
        } catch (error) {
            throw "Error de conexion"
        }
    },
}