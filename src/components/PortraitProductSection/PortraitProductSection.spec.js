import React from 'react';
import { render } from '@testing-library/react';

import useGetProduct from '../../hooks/product/get-product';

import { PortraitProductSection } from './index';

jest.mock('../../hooks/product/get-product');
jest.mock('@reach/router');

describe('<PortraitProductSection />', () => {
  const renderContainer = ({ code = 'foo' } = {}) => {
    const props = { code };
    return render(<PortraitProductSection {...props} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
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

  test('component renders as expected', () => {
    const { container } = renderContainer();
    expect(container).toMatchSnapshot();
  });
});
