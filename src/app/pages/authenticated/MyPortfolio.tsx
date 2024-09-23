import { app } from "app/App";
import { PortfolioTable } from "app/components/portfolio/PortfolioTable";
import { observer } from "mobx-react-lite";

export const MyPortfolio: React.FC<{}> = observer(() => {
  const {portfolio} = app
  return (
    <div className="p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">My portfolio</h1>
      <PortfolioTable dataList={portfolio.list()} />
    </div>
  );
});
