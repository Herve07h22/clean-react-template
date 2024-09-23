import { portfolioAPI } from "core/portfolio/interfaces/PortfolioAPI";
import { Nothing } from "core/utils/Maybe";
import { testCryptoAssets } from "./testCryptoAssets";

export class TestPortfolioAPI implements portfolioAPI {
    assetsIds = new Set<string>()
    async flush (assetsIds: string[]) {
        assetsIds.forEach(id => this.assetsIds.add(id))
        return Nothing
    }

    async getPortfolio() {
        return Array.from(this.assetsIds).map(id => ({
            id,
            volume: 50,
            value: this.getCurrentPrice(id) *0.2,
        }))
    }

    private getCurrentPrice(assetId: string) : number {
        return parseFloat(testCryptoAssets.find(asset => asset.id === assetId)?.priceUsd || "1")
    }
    
}