import { UserSession } from "core/auth/state/UserSession";
import { productionDependencies } from "infrastructure/dependencies";
import { makeAutoObservable } from "mobx";
import { Cart } from "./cart/state/Cart";
import { Catalog } from "./movie/state/Catalog";
import { MovieAPI } from "./movie/interfaces/MovieAPI";

export type Dependencies = {
  movieAPI: MovieAPI;
};

export class EcommerceApp {
  // Testable state of our app.
  // Sliced into substates
  userSession: UserSession;
  catalog: Catalog;
  cart: Cart;
  constructor(dependencies: Dependencies) {
    this.userSession = new UserSession(dependencies, this);
    this.catalog = new Catalog(dependencies, this);
    this.cart = new Cart(dependencies, this);
  }
}
