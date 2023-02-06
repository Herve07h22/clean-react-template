import { Movie } from "core/movie/models/Movie";

export const mockMovies: Movie[] = [
  {
    title: "Batman",
    id: 268,
    overview:
      'Batman must face his most ruthless nemesis when a deformed madman calling himself "The Joker" seizes control of Gotham\'s criminal underworld.',
    popularity: 46.638,
    release_date: "1989-06-23",
    poster_path:
      "https://image.tmdb.org/t/p/w780/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg",
    genres: ["Fantasy", "Action", "Crime"],
  },
  {
    title: "Superman",
    id: 1924,
    overview:
      "Mild-mannered Clark Kent works as a reporter at the Daily Planet alongside his crush, Lois Lane. Clark must summon his superhero alter-ego when the nefarious Lex Luthor launches a plan to take over the world.",
    popularity: 41.95,
    release_date: "1978-12-13",
    poster_path:
      "https://image.tmdb.org/t/p/w780/d7px1FQxW4tngdACVRsCSaZq0Xl.jpg",
    genres: ["Science Fiction", "Action", "Adventure"],
  },
];
