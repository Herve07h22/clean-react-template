import { CoinCapAPI } from "./api/CoinCapAPI";
import { TestPortfolioAPI } from "./tests/TestPortfolioAPI";

export const productionDependencies = () => ({
  marketAPI: new CoinCapAPI(),
  portfolioAPI: new TestPortfolioAPI(), // We do not have the beackend ready yet. But the client is expecting the demo !
});
