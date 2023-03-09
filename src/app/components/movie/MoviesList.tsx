import { Movie } from "core/movie/models/Movie";
import { MovieCard } from "./MovieCard";

/* ************************************************************
** Why such a component instead of movies.map in the HomePage ?
** see https://mobx.js.org/react-optimizations.html#render-lists-in-dedicated-components
** ************************************************************ 
*/

export const MoviesList: React.FC<{ movies: Movie[] }> = ({ movies }) => (
  <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
    {movies.map((movie) => (
      <MovieCard movie={movie} key={movie.id} />
    ))}
  </div>
);
