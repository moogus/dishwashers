import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mocked } from "ts-jest/utils";

import useGetProduct from "../../hooks/product/get-product";
import { ProductModel } from "../../types";

import { ProductImage } from "./index";

jest.mock("../../hooks/product/get-product");

describe("<ProductImage />", () => {
  mocked(useGetProduct).mockClear();
  const renderContainer = () => render(<ProductImage />);

  describe("when product has different amounts of images", () => {
    test("product has 1 image renders one button", () => {
      mocked(useGetProduct).mockReturnValue({
        media: {
          altText: "what the dickens",
          urls: ["1"],
        },
      } as ProductModel);
      const { getByTestId } = renderContainer();
      expect(getByTestId("image-select-buttons")).toMatchSnapshot();
    });

    test("product has 2 images renders 2 buttons", () => {
      mocked(useGetProduct).mockReturnValue({
        media: {
          altText: "what the dickens",
          urls: ["1", "2"],
        },
      } as ProductModel);
      const { getByTestId } = renderContainer();
      expect(getByTestId("image-select-buttons")).toMatchSnapshot();
    });

    test("product has 3 images renders 3 buttons", () => {
      mocked(useGetProduct).mockReturnValue({
        media: {
          altText: "what the dickens",
          urls: ["1", "2", "3"],
        },
      } as ProductModel);
      const { getByTestId } = renderContainer();
      expect(getByTestId("image-select-buttons")).toMatchSnapshot();
    });

    test("product has 4 images renders 3 buttons", () => {
      mocked(useGetProduct).mockReturnValue({
        media: {
          altText: "what the dickens",
          urls: ["1", "2", "3", "4"],
        },
      } as ProductModel);
      const { getByTestId } = renderContainer();
      expect(getByTestId("image-select-buttons")).toMatchSnapshot();
    });
  });

  describe("when <ProductImage /> has more than one image buttons can change the image", () => {
    test("cliecking image select buttons changes the image", () => {
      mocked(useGetProduct).mockReturnValue({
        media: {
          altText: "what the dickens",
          urls: ["first image", "second image"],
        },
      } as ProductModel);

      const { getByTestId, getAllByTestId } = renderContainer();
      // first image is loaded by default
      expect(getByTestId("selected-image")).toMatchSnapshot();

      const activateImageButtons = getAllByTestId("activate-image");
      userEvent.click(activateImageButtons[0]);
      // image is changed from clicking the button
      expect(getByTestId("selected-image")).toMatchSnapshot();
    });
  });
});
