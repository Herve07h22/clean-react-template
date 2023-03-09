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

  /* ***************************************
  ** Why this init() method ?
  ** It's a convenient way to fetch the data 
  ** without waiting for the React component 
  ** to mount.
  ** See App.tsx :
  ** <Route
        path="/"
        loader={async ({}) => app.catalog.init()}
        element={
          <RequireAuth>
            <HomePage catalog={app.catalog} />
          </RequireAuth>
        }
      />
  ** */

  init() {
    if (!this.searchBar) {
      this.dependencies.movieAPI.search("Batman").then(this.updateMovieList);
    }
    return this;
  }

  search(query: string) {
    this.searchBar = query;
    this.loading = true;
    this.getMatchingMovies(query);
  }

  @debounce(300)
  private async getMatchingMovies(query: string) {
    return this.dependencies.movieAPI.search(query).then(this.updateMovieList);
  }

  private updateMovieList = (movies: Movie[]) => {
    this.movies = movies;
    this.loading = false;
  };
}
