import { useSelector } from 'react-redux';
import { buildModel } from 'models/product';

import useGetProduct from 'hooks/product/get-product';

jest.mock('react-redux');
jest.mock('models/product');

describe('useGetProduct hook', () => {
  beforeAll(() => {
    jest.clearAllMocks();
    buildModel.mockImplementation((x) => x);
    useSelector.mockReturnValue({ product: 'some amazing thing' });
    useGetProduct();
  });

  test('useSelector is called', () => expect(useSelector).toHaveBeenCalled());

  test('buildModel is called with product data',
    () => expect(buildModel).toHaveBeenCalledWith('some amazing thing'));
});
