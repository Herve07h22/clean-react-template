import { MovieAPI } from "core/movie/interfaces/MovieAPI";
import { Movie } from "core/movie/models/Movie";
import { Maybe, Nothing, whenNothing } from "core/utils/Maybe";

type FreeTestMovie = {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  actors: string[];
  plot: string;
  poster: string;
  trailer: string;
  runtime: number;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  website: string;
};

export class FreeTestAPI implements MovieAPI {
  async search(query: string) {
    const maybeMovies = query
      ? await this.fetchMovie(`search=${query}&limit=6`)
      : await this.fetchMovie("limit=6");

    console.log("maybeMovies", maybeMovies);

    return whenNothing([], maybeMovies).map(this.toMovie);
  }

  private async fetchMovie(urlParam: string): Promise<Maybe<FreeTestMovie[]>> {
    try {
          const response = await fetch(`https://freetestapi.com/api/v1/movies?${urlParam}`);
          return response.json();
      } catch (error) {
          console.error(error);
          return Nothing;
      }
  }

  private toMovie = (movie: FreeTestMovie): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      overview: movie.plot,
      popularity: movie.rating,
      release_date: String(movie.year),
      genres: movie.genre,
      poster_path: movie.poster,
    };
  };
}

/*


const m = {
  id: 1,
  title: "The Shawshank Redemption",
  year: 1994,
  genre: ["Drama"],
  rating: 9.3,
  director: "Frank Darabont",
  actors: ["Tim Robbins", "Morgan Freeman"],
  plot: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
  poster: "https://fakeimg.pl/220x310/ff0000",
  trailer: "https://example.com/shawshank_redemption_trailer.mp4",
  runtime: 142,
  awards: "Nominated for 7 Oscars",
  country: "USA",
  language: "English",
  boxOffice: "$28.3 million",
  production: "Columbia Pictures",
  website: "http://www.warnerbros.com/movies/shawshank-redemption",
};

*/
