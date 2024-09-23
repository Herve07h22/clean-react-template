
export type CryptoAsset = {
    id: string
    name: string
    symbol: string
    rank: string
    priceUsd: string
    marketCapUsd: string
    maxSupply: string | null
    supply: string
    changePercent24Hr: string
    volumeUsd24Hr: string
    explorer: string | null
    vwap24Hr: string | null
}
