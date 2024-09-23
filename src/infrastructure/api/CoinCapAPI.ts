import { MarketAPI } from "core/cryptomarket/interfaces/MarketAPI";
import { CryptoAsset } from "core/cryptomarket/models/CryptoAsset";
import { isJust, Maybe, Nothing, whenNothing } from "core/utils/Maybe";

type CoinCapCryptoAsset = {
  id: string;
  name: string;
  symbol: string;
  rank: string;
  priceUsd: string;
  marketCapUsd: string;
  maxSupply: string | null;
  supply: string;
  changePercent24Hr: string;
  volumeUsd24Hr: string;
  explorer: string | null;
  vwap24Hr: string | null;
};

export class CoinCapAPI implements MarketAPI {
  async getAsset (assetId: string) {
    const maybeAsset = await this.fetchAsset(assetId);
    if (isJust(maybeAsset)) {
      return this.toAsset(maybeAsset);
    }
    return Nothing;
  }

  async search(query: string) {
    const maybeAssets = query
      ? await this.fetchAssets(`search=${query}&limit=6`)
      : await this.fetchAssets("limit=6");

    return whenNothing([], maybeAssets).map(this.toAsset);
  }

  private async fetchAssets(
    urlParam: string
  ): Promise<Maybe<CoinCapCryptoAsset[]>> {
    try {
      const response = await fetch(
        `https://api.coincap.io/v2/assets?${urlParam}`
      );
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error(error);
      return Nothing;
    }
  }

  private async fetchAsset(
    id: string
  ): Promise<Maybe<CoinCapCryptoAsset>> {
    try {
      const response = await fetch(
        `https://api.coincap.io/v2/assets/${id}`
      );
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error(error);
      return Nothing;
    }
  }

  private toAsset = (asset: CoinCapCryptoAsset): CryptoAsset => {
    // Anti corruption layer :
    // turn the API response into a CryptoAsset
    return { ...asset };
  };
}
