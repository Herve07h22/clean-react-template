import { EcommerceApp, Dependencies } from "core/app";
import { Movie } from "core/movie/models/Movie";
import { makeAutoObservable } from "mobx";

export class Cart {
  movies = new Map<Movie["id"], Movie>();
  constructor(private dependencies: Dependencies, private app: EcommerceApp) {
    makeAutoObservable(this);
  }
  addToCart(movie: Movie) {
    this.movies.set(movie.id, movie)
  }
  get nbOfItemsInCart() {
    return this.movies.size;
  }
  list () : Movie[] {
    return Array.from(this.movies.values())
  }

}
