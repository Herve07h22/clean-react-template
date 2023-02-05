import { MovieAPI } from "core/movie/interfaces/MovieAPI";
import { Movie } from "core/movie/models/Movie";

export class MeilisearchMovieAPI implements MovieAPI {
  async search(query: string) {
    const results = await fetch(import.meta.env.VITE_MEILISEARCH_API, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_MEILISEARCH_KEY}`,
      }),
      mode: "cors",
      cache: "default",
      body: this.makeBody(query, 9),
    });
    const searchResult = (await results.json()) as {
      estimatedTotalHits: number;
      hits: Movie[];
    };
    console.log(searchResult);
    return searchResult.hits;
  }

  private makeBody(search: string, limit: number) {
    return JSON.stringify({
      q: search,
      limit,
    });
  }
}
