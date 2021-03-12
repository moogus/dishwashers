import React from 'react';
import { render } from '@testing-library/react';

import useGetProduct from '../../hooks/product/get-product';

import { ProductDescription } from './index';

jest.mock('../../hooks/product/get-product');

describe('<ProductDescription />', () => {
  const renderContainer = ({ productId = 'foo' } = {}) => {
    const props = { productId };
    return render(<ProductDescription {...props} />);
  };

  describe('when ProductDescription is rendered', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      useGetProduct.mockReturnValue({ productInformation: '<p>OMG!!!!<p>' });
    });

    test('html string is rendered in the component', () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });
  });
});
