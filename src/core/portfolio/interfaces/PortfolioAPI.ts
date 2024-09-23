import { Maybe } from "core/utils/Maybe";

export interface portfolioAPI {
  flush: (assetsIds: string[]) => Promise<Maybe<{ error: string }>>;
  getPortfolio: () => Promise<
    Maybe<Array<{ id: string; volume: number; value: number }>>
  >;
}
