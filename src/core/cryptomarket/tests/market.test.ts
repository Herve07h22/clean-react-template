import { CryptoTradingApp } from "core/app";
import { wait } from "core/utils/debounce";
import { testDependencies } from "infrastructure/tests/testDependencies";
import { it, expect } from "vitest";

it("Should init with a random list of assets when no search has been done yet", async () => {
  const { market } = new CryptoTradingApp(testDependencies());
  await market.init();
  expect(market.assets.length).toBe(10);
});

it("Should keep the current search when going back to homepage", async () => {
  const { market } = new CryptoTradingApp(testDependencies());
  await market.init();
  await market.search("Ethereum");
  await wait(105); // Search is debounced

  await market.init(); // back to homepage
  expect(market.assets.length).toBe(1);
  expect(market.assets[0].name).toBe("Ethereum");
});

it("Should debounce the search", async () => {
  const dependencies = testDependencies();
  const { market } = new CryptoTradingApp(dependencies);
  await market.init(); // 1st call
  expect(market.loading).toBe(false);
  await market.search("Ether"); // Debounced
  expect(market.loading).toBe(true);
  await market.search("Ethereum"); // Debounced
  await market.search("Eth"); // Debounced
  expect(market.loading).toBe(true);
  await market.search("Ethereum"); // 2nd call
  await wait(105);
  expect(market.loading).toBe(false);
  expect(market.assets.length).toBe(1);
  expect(market.assets[0].name).toBe("Ethereum");
  expect(dependencies.marketAPI.nbOfCalls).toBe(2);
});
