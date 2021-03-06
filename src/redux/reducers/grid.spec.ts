import { ApiGridItemModel } from "../../types";

import * as actions from "../actions/grid";

import gridReducer from "./grid";

describe("gridReducer", () => {
  test("initial state", () => {
    expect(gridReducer(undefined, {})).toEqual({
      products: [],
      loading: true,
      error: false,
    });
  });

  test("'GRID_LOADING'", () => {
    expect(gridReducer(
      undefined,
      { type: actions.GRID_LOADING },
    )).toEqual({
      products: [],
      loading: true,
      error: false,
    });
  });

  test("'GRID_LOADED'", () => {
    expect(gridReducer(
      undefined,
      {
        type: actions.GRID_LOADED,
        products:  ["stuff"] as unknown as ApiGridItemModel[],
      },
    )).toEqual({
      products: ["stuff"],
      loading: false,
      error: false,
    });
  });

  test("'GRID_ERROR'", () => {
    expect(gridReducer(
      undefined,
      {
        type: actions.GRID_ERROR,
      },
    )).toEqual({
      products: [],
      loading: false,
      error: true,
    });
  });
});
