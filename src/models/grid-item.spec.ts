import { ApiGridItemModel } from "../types";

import { buildModel } from "./grid-item";

describe("model is built from data", () => {
  test("hydrated model is build as expected", () => {
    expect(buildModel({
      productId: "generation game",
      price: { now: "then" },
      title: "good game",
      image: "cuddly toy",
    } as ApiGridItemModel)).toMatchSnapshot();
  });
});
