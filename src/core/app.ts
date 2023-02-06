import { UserSession } from "core/auth/UserSession";
import { productionDependencies } from "infrastructure/dependencies";
import { makeAutoObservable } from "mobx";
import { Cart } from "./cart/Cart";
import { Catalog } from "./movie/Catalog";
import { MovieAPI } from "./movie/interfaces/MovieAPI";

export type Dependencies = {
  movieAPI: MovieAPI;
};

export class EcommerceApp {
  userSession: UserSession;
  catalog: Catalog;
  cart: Cart;
  constructor(dependencies: Dependencies) {
    this.userSession = new UserSession(dependencies, this);
    this.catalog = new Catalog(dependencies, this);
    this.cart = new Cart(dependencies, this);
  }
}
