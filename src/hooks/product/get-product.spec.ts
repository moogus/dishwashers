import { useSelector } from "react-redux";
import { mocked } from "ts-jest/utils";

import { buildModel } from "../../models/product";
import { ProductModel } from "../../types"

import useGetProduct from "./get-product";

jest.mock("react-redux");
jest.mock("../../models/product");

describe("useGetProduct hook", () => {
  beforeAll(() => {
    mocked(useSelector).mockClear();
    mocked(buildModel).mockClear();
    mocked(buildModel).mockImplementation((x) => x as unknown as ProductModel);
    mocked(useSelector).mockReturnValue({ product: "some amazing thing" });
    useGetProduct();
  });

  test("useSelector is called", () => expect(useSelector).toHaveBeenCalled());

  test("buildModel is called with product data",
    () => expect(buildModel).toHaveBeenCalledWith("some amazing thing"));
});
