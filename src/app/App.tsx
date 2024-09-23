import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Layout } from "./components/layout/Layout";
import { CryptoTradingApp } from "core/app";
import { RequireAuth } from "./components/auth/RequireAuth";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";
import { productionDependencies } from "infrastructure/dependencies";
import { MyPortfolio } from "./pages/authenticated/MyPortfolio";
import { Flush } from "./pages/Flush";
import { testDependencies } from "infrastructure/tests/testDependencies";

const dependecies =
  process.env.NODE_ENV === "production"
    ? productionDependencies()
    : testDependencies();
export const app = new CryptoTradingApp(dependecies);

function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/login" element={<Login />} />,
    <Route element={<Layout />}>
      <Route path="/" loader={() => app.market.init()} element={<Home />} />
      
      <Route element={<RequireAuth session={app.userSession} />}>
        {/* Protected routes */}
        <Route path="/flush" element={<Flush />} />
        <Route
          path="/portfolio"
          loader={() => app.portfolio.init()}
          element={<MyPortfolio />}
        />
      </Route>
    </Route>,
    <Route path="*" element={<Error404 />} />,
  ])
);

export default App;
