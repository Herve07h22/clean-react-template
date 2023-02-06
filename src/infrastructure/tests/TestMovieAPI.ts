import { MovieAPI } from "core/movie/interfaces/MovieAPI";
import { mockMovies } from "./mockMovies";

export class TestMovieAPI implements MovieAPI {
  public nbOfCalls = 0;
  async search(query: string) {
    this.nbOfCalls += 1;
    return query
      ? mockMovies.filter((m) => m.title.includes(query))
      : mockMovies;
  }
}
