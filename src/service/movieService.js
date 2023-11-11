import axios from "axios";

const peliculas = axios.create({
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTI1OWE2ODhiYWU3NjA3ODRmMWJjMDdkYWE4MDFlYiIsInN1YiI6IjY1M2ExOTZiOGEwZTliMDBlYWZiM2MyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FfRhMX8ZrCPGFC4cCf6jWiY4qZF8O29u7apet0gr5aM",
  },
});

export default {
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
};
