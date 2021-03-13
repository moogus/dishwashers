import React from "react";
import { render } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

import useLoadProduct from "../../hooks/product/load-product";
import useGetProduct from "../../hooks/product/get-product";

import { ProductModel } from "../../types";

import { ProductPage } from "./index";

jest.mock("../../hooks/product/load-product");
jest.mock("../../hooks/product/get-product");
jest.mock("@reach/router");

describe("<ProductPage />", () => {
  const renderContainer = ({ productId = "foo" } = {}) => {
    const props = { productId, path: "foo-path (needed for reach router)" };
    return render(<ProductPage {...props} />);
  };

  describe("when product api is loading", () => {
    beforeEach(() => {
      mocked(useLoadProduct).mockClear();
      mocked(useGetProduct).mockClear();
      mocked(useLoadProduct).mockReturnValue({
        loading: true,
        error: false,
      });
      mocked(useGetProduct).mockReturnValue({} as ProductModel);
    });

    test("a loading message is displayed", () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });
  });

  describe("when product api has loaded", () => {
    beforeEach(() => {
      mocked(useLoadProduct).mockClear();
      mocked(useGetProduct).mockClear();
      mocked(useLoadProduct).mockReturnValue({
        loading: false,
        error: false,
      });
      mocked(useGetProduct).mockReturnValue(({
        title: "foo",
        media: {
          altText: "what the dickens",
          urls: ["foo"],
        },
        price: "£1000",
        details: { productInformation: "<p>hiya</p>" },
        displaySpecialOffer: "baz",
        additionalServices: { includedServices: ["stuff"] },
        code: "12345",
      } as unknown) as ProductModel);
    });

    test("a product page is rendered as expected", () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });
  });
});
