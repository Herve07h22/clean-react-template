import { TestMarketAPI } from "./TestMarketAPI";
import { TestPortfolioAPI } from "./TestPortfolioAPI";

export const testDependencies = () => ({
  marketAPI: new TestMarketAPI(),
  portfolioAPI: new TestPortfolioAPI(),
});
