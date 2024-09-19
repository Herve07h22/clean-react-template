import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Layout } from "./components/layout/Layout";
import { EcommerceApp } from "core/app";
import { RequireAuth } from "./components/auth/RequireAuth";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";
import { productionDependencies } from "infrastructure/dependencies";
import { Orders } from "./pages/authenticated/Orders";
import { Checkout } from "./pages/Checkout";

export const app = new EcommerceApp(productionDependencies());

function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/login" element={<Login userSession={app.userSession} />} />,
    <Route element={<Layout cart={app.cart} session={app.userSession} />}>
      <Route
        path="/"
        loader={async ({}) => app.catalog.init()}
        element={<Home catalog={app.catalog} />}
      />
      <Route
        path="/checkout"
        element={<Checkout cart={app.cart} session={app.userSession} />}
      />
      <Route element={<RequireAuth session={app.userSession} />}>
      {/* Protected routes */}
        <Route path="/orders" element={<Orders />} />
      </Route>
    </Route>,
    <Route path="*" element={<Error404 />} />,
  ])
);

export default App;
