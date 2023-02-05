import { cart } from "core/app";
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
        <button
        onClick= {() => cart.addToCart(movie)}
          type="button"
          className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
);
