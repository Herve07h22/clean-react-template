import { EcommerceApp } from "core/app";
import { wait } from "core/utils/debounce";
import { testDependencies } from "infrastructure/tests/testDependencies";
import { it, expect } from "vitest";
import { Catalog } from "../Catalog";

it("Should init with a list fo Batman movies when no search has been done yet", async () => {
  const { catalog } = new EcommerceApp(testDependencies());
  await catalog.init();
  expect(catalog.movies.length).toBe(1);
  expect(catalog.movies[0].title).toBe("Batman");
});

it("Should init with a previous search", async () => {
  const { catalog } = new EcommerceApp(testDependencies());
  await catalog.init();
  await catalog.search("Superman");
  await wait(105); // Search is debounced
  await catalog.init();
  expect(catalog.movies.length).toBe(1);
  expect(catalog.movies[0].title).toBe("Superman");
});

it("Should debounce the search", async () => {
  const dependencies = testDependencies();
  const { catalog } = new EcommerceApp(dependencies);
  await catalog.init(); // 1st call
  expect(catalog.loading).toBe(false);
  await catalog.search("Super"); // Debounced
  expect(catalog.loading).toBe(true);
  await catalog.search("Batman"); // Debounced
  await catalog.search("Bat"); // Debounced
  await catalog.search("Superman"); // 2nd call
  await wait(105);
  expect(catalog.loading).toBe(false);
  expect(catalog.movies.length).toBe(1);
  expect(catalog.movies[0].title).toBe("Superman");
  expect(dependencies.movieAPI.nbOfCalls).toBe(2);
});
