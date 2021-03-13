import { useSelector } from "react-redux";
import { mocked } from "ts-jest/utils";

import { buildModel } from "../../models/grid-item";

import useGetGridItems from "./get-grid-items";

jest.mock("react-redux");
jest.mock("../../models/grid-item");

describe("useGetGridItems hook", () => {
  describe("no products in state", () => {
    beforeAll(() => {
      mocked(useSelector).mockClear();
      mocked(buildModel).mockClear();
      mocked(useSelector).mockReturnValue({ products: [] });
      useGetGridItems();
    });

    test("useSelector is called ", () => expect(useSelector).toHaveBeenCalled());

    test("buildModel is called 0 times",
      () => expect(buildModel).toHaveBeenCalledTimes(0));
  });

  describe("less than 20 products in state", () => {
    beforeAll(() => {
      mocked(useSelector).mockClear();
      mocked(buildModel).mockClear();
      mocked(useSelector).mockReturnValue({ products: [1, 2, 3] });
      useGetGridItems();
    });

    test("useSelector is called ", () => expect(useSelector).toHaveBeenCalled());

    test("buildModel is called 3 times",
      () => expect(buildModel).toHaveBeenCalledTimes(3));
  });


  describe("more than 20 products in state", () => {
    beforeAll(() => {
      mocked(useSelector).mockClear();
      mocked(buildModel).mockClear();
      mocked(useSelector).mockReturnValue({  products: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
        ], });
      useGetGridItems();
    });

    test("useSelector is called ", () => expect(useSelector).toHaveBeenCalled());

    test("buildModel is called 20 times only",
      () => expect(buildModel).toHaveBeenCalledTimes(20));
  });
});
