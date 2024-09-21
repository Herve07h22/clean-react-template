import { SearchBar } from "app/components/forms/SearchBar";
import { MoviesList } from "app/components/movie/MoviesList";
import { Catalog } from "core/movie/state/Catalog";
import { observer } from "mobx-react-lite";

export const Home: React.FC<{ catalog: Catalog }> = observer(
  ({ catalog }) => {
    return (
      <div>
        <SearchBar
          value={catalog.searchBar}
          onChange={(newValue) => catalog.search(newValue)}
        />
        <MoviesList movies={catalog.movies} />
      </div>
    );
  }
);
