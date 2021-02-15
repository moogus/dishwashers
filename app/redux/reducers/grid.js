import {
  GRID_LOADING,
  GRID_LOADED,
  GRID_ERROR,
} from 'actions/grid';

const intialState = { products: [], loading: true, error: false };

export default (state = intialState, action) => {
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
        ...products,
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
