import { Dependencies } from "core/app";
import { makeAutoObservable } from "mobx";
import { Movie } from "./models/Movie";

export class Catalog {
  searchBar: string = "";
  movies: Movie[] = [];
  constructor(private dependencies: Dependencies) {
    makeAutoObservable(this);
  }
  async init() {
    // What should be displayed by default ?
    this.movies = await this.dependencies.movieAPI.search("Batman");
    // Mind that will be fect BEFORE the rendering, thank to loader in the route declaration
    return this;
  }
  async search(query: string) {
    this.searchBar = query;
    // Manage the search logic throttle, and make it testable !
    this.movies = await this.dependencies.movieAPI.search(query);
  }
}
