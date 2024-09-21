import { Button } from "app/ui/buttons/Button";
import { UserSession } from "core/auth/state/UserSession";
import { Cart } from "core/cart/state/Cart";
import { observer } from "mobx-react-lite";
import { Link, Outlet } from "react-router-dom";

export const Layout: React.FC<{ cart: Cart; session: UserSession }> = observer(
  ({ cart, session }) => {
    return (
      <div>
        <div className="flex justify-between items-center flex-wrap h-full g-6 text-gray-800 mb-1">
          <h1>Fake App</h1>

          {cart.nbOfItemsInCart > 0 ? (
            <div className="flex items-center gap-4">
              {cart.nbOfItemsInCart} movie(s) added
              <Link to="/checkout">
                <Button>Checkout</Button>
              </Link>
            </div>
          ) : (
            <span>No item in your cart</span>
          )}

          {session.isLogged ? (
            <div className="flex gap-2 items-center">
              <span>Welcome {session.loggedUser?.name}</span>
              <Button onClick={() => session.logout()}>Logout</Button>
            </div>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>

        <Outlet />
      </div>
    );
  }
);
