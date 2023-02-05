import { Movie } from "../models/Movie";

export interface MovieAPI {
  search: (query: string) => Promise<Movie[]>;
}
