import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router } from "@reach/router";

import { GridPage } from "./pages/GridPage";
import { ProductPage } from "./pages/ProductPage";

import { store } from "./redux/store";

render(
  <Provider store={store}>
    <Router>
      <GridPage path="/" />
      <ProductPage path="product/:productId" />
    </Router>
  </Provider>,
  // eslint-disable-next-line
  document.querySelector(".app")
);
