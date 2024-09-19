import { FreeTestAPI } from "./api/FreeTestAPI";

export const productionDependencies = () => ({
  movieAPI: new FreeTestAPI(),
});
