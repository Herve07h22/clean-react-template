import { EcommerceApp, Dependencies } from "core/app";
import { debounce } from "core/utils/debounce";
import { makeAutoObservable } from "mobx";
import { Movie } from "../models/Movie";

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

  async init() {
    if (!this.searchBar) {
      // Default homepage => result of "Batman" search
      await this.dependencies.movieAPI
        .search("")
        .then(this.updateMovieList);
    }
    return this;
  }

  async search(query: string) {
    this.searchBar = query;
    this.loading = true;
    await this.getMatchingMovies(query);
  }

  @debounce(100)
  private async getMatchingMovies(query: string) {
    return this.dependencies.movieAPI.search(query).then(this.updateMovieList);
  }

  private updateMovieList = (movies: Movie[]) => {
    this.movies = movies;
    this.loading = false;
  };
}
