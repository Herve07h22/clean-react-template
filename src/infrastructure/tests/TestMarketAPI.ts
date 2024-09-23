import { MarketAPI } from "core/cryptomarket/interfaces/MarketAPI";
import { testCryptoAssets } from "./testCryptoAssets";
import { Nothing } from "core/utils/Maybe";

export class TestMarketAPI implements MarketAPI {
  public nbOfCalls = 0;

  async search(query: string) {
    this.nbOfCalls += 1;
    return query
      ? testCryptoAssets.filter((asset) =>
          asset.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
      : testCryptoAssets;
  }

  async getAsset(assetId: string) {
    return testCryptoAssets.find((asset) => asset.id === assetId) || Nothing;
  }
}
