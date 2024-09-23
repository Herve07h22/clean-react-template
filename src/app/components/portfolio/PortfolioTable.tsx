import { CryptoAsset } from "core/cryptomarket/models/CryptoAsset";
import { PortfolioAsset } from "core/portfolio/state/Portfolio";
import { ReactNode } from "react";

type PortfolioTableProps = {
  dataList: PortfolioAsset[];
};

export function PortfolioTable({ dataList }: PortfolioTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-black text-neon-green border-collapse border-neon-pink border-4 shadow-neon">
        <thead>
          <tr>
            <th className="px-4 py-2 text-neon-pink">Name</th>
            <th className="px-4 py-2 text-neon-pink">Volume</th>
            <th className="px-4 py-2 text-neon-pink">Today's price (USD)</th>
            <th className="px-4 py-2 text-neon-pink">Mark to market (USD)</th>
            <th className="px-4 py-2 text-neon-pink">P&L (USD)</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((asset) => (
            <tr
              key={asset.id}
              className="hover:bg-neon-green hover:bg-opacity-10"
            >
              <td className="border-t-2 border-neon-pink px-4 py-2">
                {asset.name}
              </td>

              <td className="border-t-2 border-neon-pink px-4 py-2 text-neon-blue">
                {asset.volume.toFixed(2)}
              </td>

              <td className="border-t-2 border-neon-pink px-4 py-2 text-neon-blue">
                ${asset.price.toFixed(2)}
              </td>

              <td className="border-t-2 border-neon-pink px-4 py-2 text-neon-blue">
                ${(asset.price * asset.volume).toFixed(2)}
              </td>
              <td
                className={`border-t-2 border-neon-pink px-4 py-2 ${
                  asset.profitAndLoss < 0 ? "text-neon-red" : "text-neon-green"
                }`}
              >
                ${asset.profitAndLoss.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
