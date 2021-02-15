import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ProductImage from 'components/ProductImage';
import useGetProduct from 'hooks/product/get-product';

jest.mock('hooks/product/get-product');

describe('<ProductImage />', () => {
  beforeEach(() => jest.clearAllMocks());
  const renderContainer = () => render(<ProductImage />);

  describe('when product has different amounts of images', () => {
    test('product has 1 image renders one button', () => {
      useGetProduct.mockReturnValue({
        media: {
          altText: 'what the dickens',
          urls: ['1'],
        },
      });
      const { getByTestId } = renderContainer();
      expect(getByTestId('image-select-buttons')).toMatchSnapshot();
    });

    test('product has 2 images renders 2 buttons', () => {
      useGetProduct.mockReturnValue({
        media: {
          altText: 'what the dickens',
          urls: ['1', '2'],
        },
      });
      const { getByTestId } = renderContainer();
      expect(getByTestId('image-select-buttons')).toMatchSnapshot();
    });

    test('product has 3 images renders 3 buttons', () => {
      useGetProduct.mockReturnValue({
        media: {
          altText: 'what the dickens',
          urls: ['1', '2', '3'],
        },
      });
      const { getByTestId } = renderContainer();
      expect(getByTestId('image-select-buttons')).toMatchSnapshot();
    });

    test('product has 4 images renders 3 buttons', () => {
      useGetProduct.mockReturnValue({
        media: {
          altText: 'what the dickens',
          urls: ['1', '2', '3', '4'],
        },
      });
      const { getByTestId } = renderContainer();
      expect(getByTestId('image-select-buttons')).toMatchSnapshot();
    });
  });

  describe('when <ProductImage /> has more than one image buttons can change the image', () => {
    test('cliecking image select buttons changes the image', async () => {
      useGetProduct.mockReturnValue({
        media: {
          altText: 'what the dickens',
          urls: ['first image', 'second image'],
        },
      });

      const { getByTestId, getAllByTestId } = renderContainer();
      // first image is loaded by default
      expect(getByTestId('selected-image')).toMatchSnapshot();

      const activateImageButtons = await getAllByTestId('activate-image');
      await userEvent.click(activateImageButtons[0]);
      // image is changed from clicking the button
      expect(getByTestId('selected-image')).toMatchSnapshot();
    });
  });
});
