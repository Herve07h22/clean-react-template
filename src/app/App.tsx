import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Login } from './pages/Login'
import { Layout} from './components/layout/Layout'
import { catalog, userSession } from 'core/app'
import { RequireAuth } from './components/auth/RequireAuth'
import { Error404 } from './pages/Error404'
import { HomePage } from './pages/HomePage'

function App() {

  return (
    <RouterProvider router={router} />
  )
}

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/login" element={<Login userSession={userSession} />} />,
    <Route element={<Layout />}>
      <Route
        path="/"
        loader={async ({}) => catalog.init()}
        element={
          <RequireAuth>
            <HomePage catalog={catalog} />
          </RequireAuth>
        }
      />
      </Route>,
      <Route path="*" element={<Error404 />} />,
      ]))

export default App
