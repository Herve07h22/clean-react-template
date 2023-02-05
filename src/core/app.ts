import { UserSession } from "core/auth/UserSession";
import { productionDependencies } from "infrastructure/dependencies";
import { Cart } from "./cart/Cart";
import { Catalog } from "./movie/Catalog";
import { MovieAPI } from "./movie/interfaces/MovieAPI";

export type Dependencies = {
  movieAPI: MovieAPI;
};

export const userSession = new UserSession();
export const catalog = new Catalog(productionDependencies);
export const cart = new Cart(productionDependencies);
