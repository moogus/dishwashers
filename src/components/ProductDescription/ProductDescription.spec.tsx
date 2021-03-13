import React from "react";
import { render } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

import useGetProduct from "../../hooks/product/get-product";
import { ProductModel } from "../../types";

import { ProductDescription } from "./index";

jest.mock("../../hooks/product/get-product");

describe("<ProductDescription />", () => {
  const renderContainer = () => render(<ProductDescription />);

  describe("when ProductDescription is rendered", () => {
    beforeEach(() => {
      mocked(useGetProduct).mockClear();
      mocked(useGetProduct).mockReturnValue({
        productInformation: "<p>OMG!!!!<p>",
      } as ProductModel);
    });

    test("html string is rendered in the component", () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });
  });
});
