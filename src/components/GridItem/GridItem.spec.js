import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useNavigate } from '@reach/router';

import { GridItem } from './index';

jest.mock('@reach/router');

describe('<GridItem/>', () => {
  const renderContainer = ({
    productId = '1234',
    price = '£123',
    title = 'Hiya',
    image = 'a picture',
  } = {}) => {
    const props = {
      gridItem: {
        productId,
        price,
        title,
        image,
      },
    };
    return render(<GridItem {...props} />);
  };

  describe('when <GridItem/> is rendered', () => {
    const navigate = jest.fn();
    beforeEach(() => {
      jest.clearAllMocks();
      useNavigate.mockReturnValue(navigate);
    });

    test('component renders as expected', () => {
      const { container } = renderContainer();
      expect(container).toMatchSnapshot();
    });

    test('clicking the grid item navigates to the product page', () => {
      const { getByTestId } = renderContainer();
      const clickableGridItem = getByTestId('clickable-grid-item');
      userEvent.click(clickableGridItem);
      expect(navigate).toHaveBeenCalledWith('product/1234');
    });
  });
});
