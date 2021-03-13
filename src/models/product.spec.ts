import { ApiProductModel } from "../types"

import { buildModel } from "./product";

describe("model is built from data", () => {
  test("hydrated model is build as expected", () => {
    expect(buildModel({
        title: "come a long way",
        media: {
          images: {
            alText: "foo",
            urls: ["1"],
          },
        },
        price: { now: "right here" },
        details: {},
        displaySpecialOffer: "",
        additionalServices: {},
        code: "1234",
      } as unknown as ApiProductModel)).toMatchSnapshot();
  });
});
