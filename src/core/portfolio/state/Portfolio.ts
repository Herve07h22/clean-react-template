import { Dependencies, CryptoTradingApp } from "core/app";
import { Nothing } from "core/utils/Maybe";
import { makeAutoObservable } from "mobx";

export type PortfolioAsset = {
  id: string;
  name: string;
  volume: number;
  price: number;
  profitAndLoss: number;
};

export class Portfolio {
  assets: PortfolioAsset[] = [];
  loading: boolean = false;
  errorMessage = "";

  constructor(private dependencies: Dependencies, private app: CryptoTradingApp) {
    makeAutoObservable(this);
  }

  async init() {
    this.loading = true;
    const porfolio = await this.dependencies.portfolioAPI.getPortfolio();
    if (porfolio === Nothing) {
      this.loading = false;
      this.errorMessage = "Could not fetch portfolio";
      return this;
    }
    for (const asset of porfolio) {
      // fetch each id to compute P&L
      const maybeAsset = await this.dependencies.marketAPI.getAsset(asset.id);
      if (maybeAsset === Nothing) {
        this.assets.push({
          ...asset,
          name: "Unknown",
          profitAndLoss: 0,
          price: 0,
        });
      } else {
        const price = parseFloat(maybeAsset.priceUsd);
        this.assets.push({
          ...asset,
          name: maybeAsset.name,
          profitAndLoss: (price - asset.value) * asset.volume,
          price,
        });
      }
    }
    this.loading = false;
    this.errorMessage = "";
    return this;
  }

  list(): PortfolioAsset[] {
    return this.assets;
  }
}
