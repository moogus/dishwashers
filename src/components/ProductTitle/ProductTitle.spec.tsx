import React from "react";
import { render } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

import useGetProduct from "../../hooks/product/get-product";
import { ProductModel } from "../../types";

import { ProductTitle } from "./index";

jest.mock("../../hooks/product/get-product");

describe("<ProductTitle/>", () => {
  const renderContainer = () => render(<ProductTitle />);

  describe("when <ProductTitle/> is rendered", () => {
    beforeEach(() => {
      mocked(useGetProduct).mockClear();
      mocked(useGetProduct).mockReturnValue({
        title: "what the dickens",
      } as ProductModel);
    });

    test("component renders as expected", () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });
  });
});
