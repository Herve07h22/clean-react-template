import { UserSession } from "core/auth/UserSession";
import { Cart } from "core/cart/Cart";
import { observer } from "mobx-react-lite";

export const Checkout: React.FC<{ cart: Cart; session: UserSession }> =
  observer(({ cart, session }) => {
    return <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p className="text-gray-700 mb-4">{cart.nbOfItemsInCart} items in your cart</p>
        <ul className="list-disc list-inside">
            {cart.movies.map(item => <li className="text-gray-600">{item.title}</li>)}
        </ul>
    </div>;
  });
