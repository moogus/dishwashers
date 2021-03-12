import React from 'react';
import { render } from '@testing-library/react';

import useGetProduct from '../../hooks/product/get-product';

import { ProductTitle } from './index';

jest.mock('../../hooks/product/get-product');

describe('<ProductTitle/>', () => {
  const renderContainer = () => render(<ProductTitle />);

  describe('when <ProductTitle/> is rendered', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      useGetProduct.mockReturnValue({
        title: 'what the dickens',
      });
    });

    test('component renders as expected', () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });
  });
});
