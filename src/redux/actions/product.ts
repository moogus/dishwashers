import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { ApplicationState } from "../../interfaces";
import { ThunkConfig } from "../../types";

export const PRODUCT_LOADING = "PRODUCT_LOADING";
export const PRODUCT_LOADED = "PRODUCT_LOADED";
export const PRODUCT_ERROR = "PRODUCT_ERROR";

export const loadProduct = (productId: string): 
ThunkAction<void, ApplicationState, ThunkConfig, Action<string>> => async (dispatch, _, config) => {
  dispatch({ type: PRODUCT_LOADING });
  try {
    const response = await fetch(`${config.productApi}${productId}`);
    const product = await response.json();
    dispatch({ type: PRODUCT_LOADED, product });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};
