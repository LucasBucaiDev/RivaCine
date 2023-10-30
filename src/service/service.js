import axios from "axios";
const cliente = axios.create({
  baseURL: "https://6539b55be3b530c8d9e89ccd.mockapi.io/usuario",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const peliculas = axios.create({
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTI1OWE2ODhiYWU3NjA3ODRmMWJjMDdkYWE4MDFlYiIsInN1YiI6IjY1M2ExOTZiOGEwZTliMDBlYWZiM2MyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FfRhMX8ZrCPGFC4cCf6jWiY4qZF8O29u7apet0gr5aM",
  },
});

const candy = axios.create({
  baseURL: "https://653f00ee9e8bd3be29dfd52f.mockapi.io/tienda",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async cargarDatos() {
    try {
      const response = await cliente.get("/");
      return response.data;
    } catch (error) {
      throw "Error de conexion";
    }
  },

  async guardarDatos(elem) {
    try {
      await cliente.post("/", elem);
    } catch (error) {
      throw "Error de conexion";
    }
  },

  async borrarDatos(id) {
    try {
      await cliente.delete("/" + id);
    } catch (error) {
      throw "Error de conexion";
    }
  },

  async actualizarDatos(id, elem) {
    try {
      await cliente.put("/" + id, elem);
    } catch (error) {
      throw "Error de conexion";
    }
  },

  async cargarPeliculas(pagina) {
    try {
      const response = await peliculas.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=de259a688bae760784f1bc07daa801eb&language=es&page=${pagina}`
      );
      return response.data;
    } catch (error) {
      throw "Error de conexion";
    }
  },

  async cargarCandy() {
    try {
      const response = await candy.get("/");
      return response.data;
    } catch (error) {
      throw "Error de conexion";
    }
  }

};
