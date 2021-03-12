import {
  GRID_LOADING,
  GRID_LOADED,
  GRID_ERROR,
} from "../actions/grid";

import { ApiGridItem } from "../../types"
import { GridItemsState } from "../../interfaces"

export const intialState:GridItemsState = { 
  products: [] as ApiGridItem[], 
  loading: true, 
  error: false
};

export default (state = intialState, action: { type?: string; products?: ApiGridItem[]; }) => {
  switch (action.type) {
    case GRID_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GRID_LOADED: {
      const { products } = action;
      return {
        ...state,
        products,
        loading: false,
      };
    }

    case GRID_ERROR: {
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
