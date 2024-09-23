import { CryptoTradingApp, Dependencies } from "core/app";
import { CryptoAsset } from "core/cryptomarket/models/CryptoAsset";
import { isJust, whenNothing } from "core/utils/Maybe";
import { makeAutoObservable } from "mobx";

export class Trade {
  trades = new Map<CryptoAsset["id"], CryptoAsset>();
  error = "";
  loading = false;

  constructor(private dependencies: Dependencies, private app: CryptoTradingApp) {
    makeAutoObservable(this);
  }
  addTrade(asset: CryptoAsset) {
    this.trades.set(asset.id, asset);
  }
  get nbOfPendingTrades() {
    return this.trades.size;
  }
  list(): CryptoAsset[] {
    return Array.from(this.trades.values());
  }
  flush = async () => {
    this.loading = true;
    const assetsIds = this.list().map((asset) => asset.id);
    const maybeFlushed = await this.dependencies.portfolioAPI.flush(assetsIds);
    if (isJust(maybeFlushed)) {
      this.error = maybeFlushed.error;
    } else {
      this.trades.clear();
      this.error = "";
    }
    this.loading = false;
  };
}
