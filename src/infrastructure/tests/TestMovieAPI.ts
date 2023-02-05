import { MovieAPI } from "core/movie/interfaces/MovieAPI";
import { mockMovies } from "./mockMovies";

export class TestMovieAPI implements MovieAPI {
  async search(query: string) {
    return query
      ? mockMovies
      : mockMovies.filter((m) => m.title.includes(query));
  }
}
