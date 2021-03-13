import { ApiProductModel } from "../../types";
import * as actions from "../actions/product";

import productReducer from "./product";

describe("productReducer", () => {
  test("initial state", () => {
    expect(productReducer(undefined, {})).toEqual({ 
      product: {}, 
      loading: true, 
      error: false 
    });
  });

  test("'PRODUCT_LOADING'", () => {
    expect(productReducer(
      undefined,
      { type: actions.PRODUCT_LOADING },
    )).toEqual({ 
      product: {}, 
      loading: true, 
      error: false 
    });
  });

  test("'PRODUCT_LOADED'", () => {
    expect(productReducer(
      undefined,
      {
        type: actions.PRODUCT_LOADED,
        product: { toy: "cuddly" } as unknown as ApiProductModel,
      },
    )).toEqual({ 
      product: { toy: "cuddly" }, 
      loading: false, 
      error: false 
    });
  });

  test("'PRODUCT_ERROR'", () => {
    expect(productReducer(
      undefined,
      {
        type: actions.PRODUCT_ERROR,
      },
    )).toEqual({
      product: {},
      loading: false,
      error: true,
    });
  });
});
