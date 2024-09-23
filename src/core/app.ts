import { UserSession } from "core/auth/state/UserSession";
import { makeAutoObservable } from "mobx";
import { Trade } from "./portfolio/state/Trade";
import { Market } from "./cryptomarket/state/Market";
import { MarketAPI } from "./cryptomarket/interfaces/MarketAPI";
import { portfolioAPI } from "./portfolio/interfaces/PortfolioAPI";
import { Portfolio } from "./portfolio/state/Portfolio";

export type Dependencies = {
  marketAPI: MarketAPI;
  portfolioAPI: portfolioAPI;
};

export class CryptoTradingApp {
  // Testable state of our app.
  // Sliced into substates
  userSession: UserSession;
  market: Market;
  trade: Trade;
  portfolio:Portfolio;
  constructor(dependencies: Dependencies) {
    this.userSession = new UserSession(dependencies, this);
    this.market = new Market(dependencies, this);
    this.trade = new Trade(dependencies, this);
    this.portfolio = new Portfolio(dependencies, this);
    makeAutoObservable(this);
  }
}
