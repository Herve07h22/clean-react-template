import { app } from "app/App";
import { CryptoTable } from "app/components/crypto/CryptoTable";
import { Button } from "app/ui/buttons/Button";
import { observer } from "mobx-react-lite";

export const Flush = observer(() => {
  const { trade } = app;
  return (
    <div className="p-6 rounded-lg shadow-md flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-4">Pending trades</h1>
      <p className="mb-4">
        {trade.nbOfPendingTrades} trade(s) are about to be sent to broker
      </p>
      <CryptoTable dataList={trade.list()} />

      <Button onClick={trade.flush}>✅ Confirm the trades</Button>
    </div>
  );
});
