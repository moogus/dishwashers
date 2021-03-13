import {
  PRODUCT_LOADING,
  PRODUCT_LOADED,
  PRODUCT_ERROR,
} from "../actions/product";

import { ApiProductModel } from "../../types";
import { ProductsState } from "../../interfaces" 


export const intialState:ProductsState = { 
  product: {} as ApiProductModel, 
  loading: true, 
  error: false
};

export default (
  state = intialState, action: { type?: string; product?: ApiProductModel; }
  ): ProductsState  => {

  switch (action.type) {
    case PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case PRODUCT_LOADED: {
      const { product } = action;

      return {
        ...state,
        product,
        loading: false,
      };
    }

    case PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    default:
      return state;
  }
  
};
