import React from 'react';
import { render } from '@testing-library/react';

import ProductPage from 'components/ProductPage';
import useLoadProduct from 'hooks/product/load-product';
import useGetProduct from 'hooks/product/get-product';

jest.mock('hooks/product/load-product');
jest.mock('hooks/product/get-product');
jest.mock('@reach/router');

describe('<ProductPage />', () => {
  const renderContainer = ({ productId = 'foo' } = {}) => {
    const props = { productId };
    return render(<ProductPage {...props} />);
  };

  describe('when product api is loading', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      useLoadProduct.mockReturnValue({ loading: true });
      useGetProduct.mockReturnValue({});
    });

    test('a loading message is displayed', () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });
  });

  describe('when product api has loaded', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      useLoadProduct.mockReturnValue({ loading: false });
      useGetProduct.mockReturnValue({
        title: 'foo',
        media: {
          altText: 'what the dickens',
          urls: ['foo'],
        },
        price: '£1000',
        details: { productInformation: '<p>hiya</p>' },
        displaySpecialOffer: 'baz',
        additionalServices: { includedServices: ['stuff'] },
        code: '12345',
      });
    });

    test('a product page is rendered as expected', () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });
  });
});
