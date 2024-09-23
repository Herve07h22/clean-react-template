import { CryptoTradingApp } from "core/app";
import { testDependencies } from "infrastructure/tests/testDependencies";
import { it, expect, beforeEach } from "vitest";

var app : CryptoTradingApp
beforeEach( async () => {
    app = new CryptoTradingApp(testDependencies());
    app.market.init()
} )

it("Should init with no pending trade", async () => {
  const { trade } = app;
  expect(trade.nbOfPendingTrades).toBe(0)
});


it("Can add a trade", async () => {
    const { trade, market } = app
    const movie = market.assets[0]
    expect(movie).toBeTruthy()
    trade.addTrade(movie)
    expect(trade.nbOfPendingTrades).toBe(1)
})

it("Can add a same item twice", async () => {
    const { trade, market } = app;
    const movie = market.assets[0]
    expect(movie).toBeTruthy()
    trade.addTrade(movie)
    trade.addTrade(movie)
    expect(trade.nbOfPendingTrades).toBe(1)
})

