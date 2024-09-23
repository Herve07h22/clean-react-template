import { app } from "app/App";
import { Button } from "app/ui/buttons/Button";
import { CryptoAsset } from "core/cryptomarket/models/CryptoAsset";
import React from "react";

export const BuyButton: React.FC<{ asset: CryptoAsset }> = ({ asset }) => {
  const { trade } = app;
  return <Button onClick={() => trade.addTrade(asset)}>Buy</Button>;
};
