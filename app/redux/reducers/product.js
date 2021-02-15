import {
  PRODUCT_LOADING,
  PRODUCT_LOADED,
  PRODUCT_ERROR,
} from 'actions/product';

const intialState = { product: {}, loading: true };

export default (state = intialState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case PRODUCT_LOADED: {
      const { product = {} } = action;

      return {
        ...state,
        product: {
          ...product,
        },
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
