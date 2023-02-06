import { EcommerceApp, Dependencies } from "core/app";
import { Movie } from "core/movie/models/Movie";
import { makeAutoObservable } from "mobx";

export class Cart {
  movies: Movie[] = [];
  constructor(private dependencies: Dependencies, private app: EcommerceApp) {
    makeAutoObservable(this);
  }
  addToCart(movie: Movie) {
    this.movies.push(movie);
  }
  get nbOfItemsInCart() {
    return this.movies.length;
  }
}
