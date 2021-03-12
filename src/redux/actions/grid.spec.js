import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './grid';

const config = { gridApi: '/grid/' };
const middlewares = [thunk.withExtraArgument(config)];
const mockStore = configureMockStore(middlewares);

describe('grid actions', () => {
  describe('loadProductGrid api success', () => {
    beforeAll(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    test('loads the product grid items', async () => {
      fetchMock.getOnce('/grid/', { products: ['foo'] });

      const store = mockStore({});
      await store.dispatch(actions.loadProductGrid());

      expect(store.getActions()).toEqual([
        { type: actions.GRID_LOADING },
        { type: actions.GRID_LOADED, products:  ['foo'] },
      ]);
    });
  });

  describe('loadProductGrid api error', () => {
    beforeAll(() => {
      fetchMock.reset();
      fetchMock.restore();
    });

    test('loads the product grid items', async () => {
      fetchMock.getOnce('/grid/', { throws: new Error('What the dickens') });

      const store = mockStore({});
      await store.dispatch(actions.loadProductGrid());

      expect(store.getActions()).toEqual([
        { type: actions.GRID_LOADING },
        { type: actions.GRID_ERROR },
      ]);
    });
  });
});
