import { testDependencies } from "infrastructure/tests/testDependencies";
import { it, expect } from "vitest";
import { Catalog } from "../Catalog";

it("Should init with a list fo Batman movies", async () => {
  const catalog = new Catalog(testDependencies);
  await catalog.init();
  expect(catalog.movies.length).toBeGreaterThan(0);
});
