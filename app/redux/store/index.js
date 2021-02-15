import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import gridReducer from 'reducers/grid';
import productReducer from 'reducers/product';

const PRODUCT_GRID_API = 'http://localhost:8010/proxy/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher &key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI';
const PRODUCT_API = 'http://localhost:8010/proxy/mobile-apps/api/v1/products/';

const config = {
  gridApi: PRODUCT_GRID_API,
  productApi: PRODUCT_API,
};

const rootReducer = combineReducers({
  product: productReducer,
  grid: gridReducer,
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(config)),
);
