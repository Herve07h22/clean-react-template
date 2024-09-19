import { app } from "app/App";
import { Button } from "app/ui/buttons/Button";
import { Movie } from "core/movie/models/Movie";

// Dumb component
// Can have a local state, but not connected to the store

export const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => (
  <div className="flex justify-center">
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
      <div data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img className="rounded-t-lg" src={movie.poster_path} alt="" />
      </div>
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          {movie.title}
        </h5>
        <p className="text-gray-700 text-base mb-4">{movie.overview}</p>
        <Button onClick={() => app.cart.addToCart(movie)} >Add to cart</Button>
      </div>
    </div>
  </div>
);
