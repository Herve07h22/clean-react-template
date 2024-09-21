import { EcommerceApp } from "core/app";
import { testDependencies } from "infrastructure/tests/testDependencies";
import { it, expect, beforeEach } from "vitest";

var app : EcommerceApp
beforeEach( async () => {
    app = new EcommerceApp(testDependencies());
    app.catalog.init()
} )

it("Should init with an empty cart", async () => {
  const { cart } = app;
  expect(cart.nbOfItemsInCart).toBe(0)
});


it("Can add an item to the cart", async () => {
    const { cart, catalog } = app
    const movie = catalog.movies[0]
    expect(movie).toBeTruthy()
    cart.addToCart(movie)
    expect(cart.nbOfItemsInCart).toBe(1)
})

it("Can add a same item twice to the cart", async () => {
    const { cart, catalog } = app;
    const movie = catalog.movies[0]
    expect(movie).toBeTruthy()
    cart.addToCart(movie)
    cart.addToCart(movie)
    expect(cart.nbOfItemsInCart).toBe(1)
})

