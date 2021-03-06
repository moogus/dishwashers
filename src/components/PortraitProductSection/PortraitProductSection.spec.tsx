import React from "react";
import { render } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

import useGetProduct from "../../hooks/product/get-product";
import { ProductModel } from "../../types";

import { PortraitProductSection } from "./index";

jest.mock("../../hooks/product/get-product");
jest.mock("@reach/router");

describe("<PortraitProductSection />", () => {
  const renderContainer = () => render(<PortraitProductSection />);

  beforeEach(() => {
    mocked(useGetProduct).mockClear();
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

  test("component renders as expected", () => {
    const { container } = renderContainer();
    expect(container).toMatchSnapshot();
  });
});
