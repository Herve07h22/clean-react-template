import { Maybe } from "core/utils/Maybe";
import { CryptoAsset } from "../models/CryptoAsset";

export interface MarketAPI {
  search: (query: string) => Promise<CryptoAsset[]>;
  getAsset: (assetId: string) => Promise<Maybe<CryptoAsset>>;
}
