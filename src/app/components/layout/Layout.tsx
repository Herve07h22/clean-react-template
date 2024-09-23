import { app } from "app/App";
import { Button } from "app/ui/buttons/Button";
import { observer } from "mobx-react-lite";
import { Link, Outlet } from "react-router-dom";

export const Layout = observer(() => {
  const { trade, userSession } = app;
  return (
    <div className="p-4 bg-black text-base">
      <div className="flex justify-between items-center flex-wrap h-full g-6 text-neon-green mb-1">
        <div className="h-12 w-12"><Link to="/"><img src="/cryptotrade.webp"/></Link></div>

        {trade.nbOfPendingTrades > 0 ? (
          <div className="flex gap-2 items-center">
          <span>{trade.nbOfPendingTrades} trade(s) added</span>
          <Link to="/flush">
                <Button>Flush</Button>
              </Link>
          </div>
        ) : (
          <span>🚫 No pending trade</span>
        )}

        {userSession.isLogged ? (
          <div className="flex gap-2 items-center">
            <Link to="/">
              <Button>Market</Button>
            </Link>
            <Link to="/portfolio">
              <Button>Porfolio</Button>
            </Link>
            <Button onClick={() => userSession.logout()}>Logout</Button>
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
});
