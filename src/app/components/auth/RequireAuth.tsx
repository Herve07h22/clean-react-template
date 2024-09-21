import { UserSession } from "core/auth/state/UserSession";
import { observer } from "mobx-react-lite";
import { Navigate, Outlet, useLocation } from "react-router-dom";

type RequireAuthProps = {
  session: UserSession;
};

export const RequireAuth = observer(({ session }: RequireAuthProps) => {
  let location = useLocation();

  if (!session.isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
});
