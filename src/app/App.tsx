import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Login } from './pages/Login'
import { Layout} from './components/layout/Layout'
import { EcommerceApp } from 'core/app'
import { RequireAuth } from './components/auth/RequireAuth'
import { Error404 } from './pages/Error404'
import { HomePage } from './pages/HomePage'
import { productionDependencies } from 'infrastructure/dependencies'

export const app = new EcommerceApp(productionDependencies())

function App() {
  return (
    <RouterProvider router={router} />
  )
}

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/login" element={<Login userSession={app.userSession} />} />,
    <Route element={<Layout />}>
      <Route
        path="/"
        loader={async ({}) => app.catalog.init()}
        element={
          <RequireAuth>
            <HomePage catalog={app.catalog} />
          </RequireAuth>
        }
      />
      </Route>,
      <Route path="*" element={<Error404 />} />,
      ]))

export default App
