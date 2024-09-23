import { CryptoAsset } from "core/cryptomarket/models/CryptoAsset";
import { ReactNode } from "react";

type CryptoTableProps = {
  dataList: CryptoAsset[];
  action?: (asset: CryptoAsset) => ReactNode;
};

export function CryptoTable({ dataList, action }: CryptoTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-black text-neon-green border-collapse border-neon-pink border-4 shadow-neon">
        <thead>
          <tr>
            <th className="px-4 py-2 text-neon-pink">Rank</th>
            <th className="px-4 py-2 text-neon-pink">Name</th>
            <th className="px-4 py-2 text-neon-pink">Symbol</th>
            <th className="px-4 py-2 text-neon-pink">Price (USD)</th>

            <th className="px-4 py-2 text-neon-pink">Change (24h)</th>
            <th className="px-4 py-2 text-neon-pink">Explorer</th>
            {action ? (
              <th className="px-4 py-2 text-neon-pink">Trade</th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {dataList.map((crypto) => (
            <tr
              key={crypto.id}
              className="hover:bg-neon-green hover:bg-opacity-10"
            >
              <td className="border-t-2 border-neon-pink px-4 py-2">
                {crypto.rank}
              </td>
              <td className="border-t-2 border-neon-pink px-4 py-2">
                {crypto.name}
              </td>
              <td className="border-t-2 border-neon-pink px-4 py-2">
                {crypto.symbol}
              </td>
              <td className="border-t-2 border-neon-pink px-4 py-2 text-neon-blue">
                ${parseFloat(crypto.priceUsd).toFixed(2)}
              </td>
              <td
                className={`border-t-2 border-neon-pink px-4 py-2 ${
                  parseFloat(crypto.changePercent24Hr) < 0
                    ? "text-neon-red"
                    : "text-neon-green"
                }`}
              >
                {parseFloat(crypto.changePercent24Hr).toFixed(2)}%
              </td>
              <td className="border-t-2 border-neon-pink px-4 py-2">
                <a
                  href={crypto.explorer || "#"}
                  className="text-neon-pink hover:text-neon-yellow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explorer
                </a>
              </td>
              {action ? (
                <td className="border-t-2 border-neon-pink px-4 py-2">
                  {action(crypto)}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
