import { useDispatch, useSelector } from 'react-redux';

import { loadProduct } from '../../redux/actions/product';

import useLoadProduct from './load-product';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn((f) => { f(); }),
}));
jest.mock('react-redux');
jest.mock('../../redux/actions/product');

describe('useLoadProduct hook', () => {
  const dispatch = jest.fn().mockImplementation((x) => x);
  beforeAll(() => {
    jest.clearAllMocks();
    loadProduct.mockReturnValue('hi');
    useSelector.mockReturnValue({ loading: true, error: false });
    useDispatch.mockReturnValue(dispatch);
    useLoadProduct('foo-bar');
  });

  test('useSelector is called', () => expect(useSelector).toHaveBeenCalled());

  test('useDispatch is called', () => expect(useSelector).toHaveBeenCalled());

  test('dispatch is called', () => expect(dispatch).toHaveBeenCalledWith('hi'));

  test('loadProduct action is called', () => expect(loadProduct).toHaveBeenCalledWith('foo-bar'));
});
