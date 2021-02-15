import React from 'react';
import { render } from '@testing-library/react';

import ProductPrice from 'components/ProductPrice';
import useGetProduct from 'hooks/product/get-product';

jest.mock('hooks/product/get-product');

describe('<ProductPrice/>', () => {
  const renderContainer = () => render(<ProductPrice />);

  describe('when <ProductPrice/> is rendered', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      useGetProduct.mockReturnValue({
        price: '£10000.00', additionalServices: ['some amazing stuff'],
      });
    });

    test('component renders as expected', () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });
  });
});
