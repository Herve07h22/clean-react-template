import { MeilisearchMovieAPI } from "./api/MeilisearchMovieAPI";

export const productionDependencies = () => ({
  movieAPI: new MeilisearchMovieAPI(),
});
