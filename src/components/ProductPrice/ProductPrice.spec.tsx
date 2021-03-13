import React from "react";
import { render } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

import useGetProduct from "../../hooks/product/get-product";
import { ProductModel } from "../../types";

import { ProductPrice } from "./index";

jest.mock("../../hooks/product/get-product");

describe("<ProductPrice/>", () => {
  const renderContainer = () => render(<ProductPrice />);

  describe("when <ProductPrice/> is rendered", () => {
    beforeEach(() => {
      mocked(useGetProduct).mockClear();
      mocked(useGetProduct).mockReturnValue(({
        price: "£10000.00",
        additionalServices: ["some amazing stuff"],
      } as unknown) as ProductModel);
    });

    test("component renders as expected", () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });
  });
});
