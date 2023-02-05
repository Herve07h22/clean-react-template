import { MovieCard } from "app/components/movie/MovieCard";
import { Catalog } from "core/movie/Catalog";
import { observer } from "mobx-react-lite";

export const HomePage: React.FC<{ catalog: Catalog }> = observer(
  ({ catalog }) => {
    return (
      <div>
        <div><input
      type="text"
      className="
        block
        w-full
        px-3
        py-1.5
        mb-2
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      placeholder="Search for a title"
      value={catalog.searchBar}
      onChange={(e) => catalog.search(e.target.value)}
    /></div>

        <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
          {catalog.movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
);
