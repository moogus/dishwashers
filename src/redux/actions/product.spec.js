import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './product';

const config = { productApi: '/product/' };
const middlewares = [thunk.withExtraArgument(config)];
const mockStore = configureMockStore(middlewares);

describe('grid actions', () => {
  describe('loadProduct api success', () => {
    afterAll(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    test('loads the product', async () => {
      fetchMock.getOnce('/product/1234', { product: { foo: 'bar' } });

      const store = mockStore({});
      await store.dispatch(actions.loadProduct('1234'));

      expect(store.getActions()).toEqual([
        { type: actions.PRODUCT_LOADING },
        { type: actions.PRODUCT_LOADED, product: { product: { foo: 'bar' } } },
      ]);
    });
  });

  describe('loadProductGrid api error', () => {
    afterAll(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    test('loads the product grid items', async () => {
      fetchMock.getOnce('/product/1234', { throws: new Error('What the dickens') });

      const store = mockStore({});
      await store.dispatch(actions.loadProduct('1234'));

      expect(store.getActions()).toEqual([
        { type: actions.PRODUCT_LOADING },
        { type: actions.PRODUCT_ERROR },
      ]);
    });
  });
});
