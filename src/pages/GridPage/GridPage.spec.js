import React from 'react';
import { render } from '@testing-library/react';

import useLoadGridItems from '../../hooks/grid-items/load-grid-items';
import useGetGridItems from '../../hooks/grid-items/get-grid-items';

import { GridPage } from './index';

jest.mock('../../hooks/grid-items/load-grid-items');
jest.mock('../../hooks/grid-items/get-grid-items');
jest.mock('@reach/router');

describe('<GridItem />', () => {
  const renderContainer = ({ productId = 'foo' } = {}) => {
    const props = { productId };
    return render(<GridPage {...props} />);
  };

  describe('when product-grid api is loading', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      useLoadGridItems.mockReturnValue({ loading: true });
      useGetGridItems.mockReturnValue([]);
    });

    test('a loading message is displayed', () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });
  });

  describe('when product-grid api has loaded', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      useLoadGridItems.mockReturnValue({ loading: false });
      useGetGridItems.mockReturnValue([{
        productId: '1234',
        price: '£1000',
        title: 'What the dickens',
        image: 'foo',
      }]);
    });

    test('product grid page is rendered as expected', () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });
  });
});
