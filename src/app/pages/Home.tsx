import { app } from "app/App";
import { BuyButton } from "app/components/crypto/BuyButton";
import { CryptoTable } from "app/components/crypto/CryptoTable";
import { SearchBar } from "app/components/forms/SearchBar";
import { CryptoAsset } from "core/cryptomarket/models/CryptoAsset";
import { observer } from "mobx-react-lite";

export const Home = observer(() => {
  const { market } = app;
  return (
    <div>
      <SearchBar
        value={market.searchBar}
        onChange={(newValue) => market.search(newValue)}
      />

      <CryptoTable
        dataList={market.assets}
        action={(asset) => <BuyButton asset={asset} />}
      />
    </div>
  );
});
