import { EcommerceApp, Dependencies } from "core/app";
import { debounce } from "core/utils/debounce";
import { makeAutoObservable } from "mobx";
import { Movie } from "./models/Movie";

export class Catalog {
  searchBar: string = "";
  loading = false;
  movies: Movie[] = [];
  constructor(private dependencies: Dependencies, private app: EcommerceApp) {
    makeAutoObservable(this);
  }
  init() {
    // What should be displayed by default ?
    if (!this.searchBar) {
      this.dependencies.movieAPI.search("Batman").then(this.updateMovieList);
    }
    // Mind that will be fect BEFORE the rendering, thank to loader in the route declaration
    return this;
  }

  search(query: string) {
    this.searchBar = query;
    this.loading = true;
    this.getMatchingMovies(query);
  }

  updateMovieList = (movies: Movie[]) => {
    this.movies = movies;
    this.loading = false;
  };

  @debounce(100)
  private async getMatchingMovies(query: string) {
    return this.dependencies.movieAPI.search(query).then(this.updateMovieList);
  }
}
