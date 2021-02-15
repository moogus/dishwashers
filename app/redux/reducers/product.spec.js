import * as actions from 'actions/product';
import productReducer from 'reducers/product';

describe('productReducer', () => {
  test('initial state', () => {
    expect(productReducer(undefined, {})).toEqual({ product: {}, loading: true });
  });

  test('"PRODUCT_LOADING"', () => {
    expect(productReducer(
      undefined,
      { type: actions.PRODUCT_LOADING },
    )).toEqual({ product: {}, loading: true });
  });

  test('"PRODUCT_LOADED"', () => {
    expect(productReducer(
      undefined,
      {
        type: actions.PRODUCT_LOADED,
        product: { toy: 'cuddly' },
      },
    )).toEqual({ product: { toy: 'cuddly' }, loading: false });
  });

  test('"PRODUCT_ERROR"', () => {
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
