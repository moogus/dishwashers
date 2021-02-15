import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';

import GridPage from 'components/GridPage';

import store from 'store';

render(
    <Provider store={store}>
      <Router>
        <GridPage path="/" />
      </Router>
    </Provider>,
    // eslint-disable-next-line
    document.querySelector('.app'),
);
